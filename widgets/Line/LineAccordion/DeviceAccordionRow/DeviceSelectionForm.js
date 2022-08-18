import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { devices } from "../../../../data";
import { quoteSlice } from "../../../../store/slices/quote-slice";

const initialValues = {
  manufacturer: '',
  manufacturer_other: '',
  model: '',
  model_other: '',
  memory: '',
  memory_other: '',
  color: '',
  color_other: ''
}

const displayText = (values) => {

  let text = '';

  let manufacturerToUse = '';
  
  if(values.manufacturer){

    if(values.manufacturer !== 'other'){
      manufacturerToUse = values.manufacturer;
    }

    if(values.manufacturer === 'other' && values.manufacturer_other.length > 0){
      manufacturerToUse += values.manufacturer_other;
    }
    
  }

  if(manufacturerToUse === '') return 'None';
  
  let modelToUse = '';

  if(values.model){
    if(values.model !== 'other'){
      modelToUse = values.model;
    }

    if(values.model === 'other' && values.model_other.length > 0){
      modelToUse = values.model_other;
    }

  }
  
  let memoryToUse = '';

  if(values.memory){
    if(values.memory === 'other' && values.memory_other.length > 0){
      memoryToUse = values.memory_other;
    }

    if(values.memory !== 'other'){
      memoryToUse = values.memory;
    }
    
  }

  let colorToUse = '';
  
  if(values.color){
    if(values.color === 'other' && values.color_other.length > 0){
      colorToUse = values.color_other;
    }

    if(values.color !== 'other'){
      colorToUse = values.color;
    }
    
  }

  if(
    manufacturerToUse &&
    modelToUse &&
    memoryToUse &&
    colorToUse
  ) {
    return `${manufacturerToUse} ${modelToUse} (${memoryToUse}, ${colorToUse})`;

  } else if(
    manufacturerToUse &&
    modelToUse &&
    memoryToUse
  ){
    return `${manufacturerToUse} ${modelToUse} (${memoryToUse})`;

  } else if(
    manufacturerToUse &&
    modelToUse &&
    colorToUse
  ){
    return `${manufacturerToUse} ${modelToUse} (${colorToUse})`;
  } else if(
    manufacturerToUse &&
    modelToUse
  ){
    return `${manufacturerToUse} ${modelToUse}`;
  } else {
    return manufacturerToUse;
  }

}

export const DeviceSelectionForm = ({line, toggle}) => {
  const [values, setValues] = useState(initialValues);

  const [devicesData, setDevicesData] = useState([]);
  const [manufacturersData, setManufacturersData] = useState([]);
  const [modelsData, setModelsData] = useState([]);
  const [memoriesData, setMemoriesData] = useState([]);
  const [colorsData, setColorsData] = useState([]);

  useEffect(() => {
    setDevicesData(devices.filter(device => device.type === line.type));
  }, [line.type]);

  useEffect(() => {
    const uniqueManufacturers = [
      {
        name: ''
      }
    ]
  
    const manSet = new Set();
  
    devicesData.forEach(device => {
      if(!manSet.has(device.manufacturer)){
        uniqueManufacturers.push({
          name: device.manufacturer
        });
        manSet.add(device.manufacturer);
      }
    });
    
    uniqueManufacturers.push({
      name: 'other'
    });
    
    setManufacturersData(uniqueManufacturers);
  }, [devicesData]);
  
  useEffect(() => {
    const uniqueModels = [
      {
        name: ''
      }
    ]
  
    const model = new Set();
  
    devicesData
    .filter(d => {
      if(values.manufacturer === 'other') return true;
      return d.manufacturer === values.manufacturer;
    })
    .forEach(device => {
      if(!model.has(device.model)){
        uniqueModels.push({
          name: device.model
        });
        model.add(device.model);
      }
    });
    
    uniqueModels.push({
      name: 'other'
    });
    
    setModelsData(uniqueModels);
  }, [values.manufacturer]);
  
  useEffect(() => {
    const uniqueMemories = [
      {
        name: ''
      }
    ]
    
    const memories = new Set();
    
    const uniqueColors = [
      {
        name: ''
      }
    ]
    
    const colors = new Set();

    devicesData
    .filter(d => {
      if(values.model === 'other') return true;
      return d.model === values.model;
    })
    .forEach(d => {
      d.memories.forEach(memory => {
        if(!memories.has(memory)){
          uniqueMemories.push({name: memory});
          memories.add(memory)
        }

      })
      
      d.colors.forEach(color => {
        if(!colors.has(color)){
          uniqueColors.push({name: color});
          colors.add(color)
        }

      })
    })

    
    uniqueMemories.push({
      name: 'other'
    });
    
    uniqueColors.push({
      name: 'other'
    });
    
    setMemoriesData(uniqueMemories);
    setColorsData(uniqueColors);

  }, [values.model]);

  const handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;

    switch(name){
      case 'manufacturer':
        if(value === 'other'){
          setValues({
            ...values,
            [name]: value,
            model: 'other'
          })
        } else if(value === '') {
          setValues(initialValues);
        } else if(value !== values.manufacturer) {
          setValues({
            ...initialValues,
            [name]: value
          });
        } else {
          setValues({
            ...values,
            [name]: value
          })
        }
        break;
      case 'manufacturer_other':
        setValues({
          ...values,
          [name]: value
        })
        break;
      case 'model_other':
        setValues({
          ...values,
          [name]: value
        })
        break;
      case 'memory_other':
        setValues({
          ...values,
          [name]: value
        })
        break;
      case 'color_other':
        setValues({
          ...values,
          [name]: value
        })
        break;
      case 'model':
        if(value === ''){
          setValues({
            ...values,
            memory: initialValues.memory,
            memory_other: initialValues.memory_other,
            color: initialValues.color,
            color_other: initialValues.color_other,
            [name]: value
          })
          break;
        } else {
          setValues({
            ...values,
            [name]: value
          })
          break;
        }
      
      case 'memory':
        setValues({
          ...values,
          [name]: value
        })
        break;
      case 'color':
        setValues({
          ...values,
          [name]: value
        })
        break;
      default:
        throw Error(`unkown input name: ${name}`);
    }
  }

  const dispatch = useDispatch();

  const handleDispatch = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(quoteSlice.actions.updateLineById({
      lineId: line.id,
      changes: {
        ...line,
        device: {
          ...line.device,
          name: displayText(values)
        }
      }
    }))
    toggle();
    setValues(initialValues);
  }

  return <div
    className="device-selection-form"
  >
    <h6
      className="device-selection-form-display-text"
    >{displayText(values)}</h6>
    
    <div
      className="device-selection-form-input-area"
    >
      <label>Manufacturer:
      
        <select
          name="manufacturer"
          onChange={handleChange}
        >
          {manufacturersData.map(option => {
            return <option
              key={option.name}
              value={option.name}
            >
              {option.name === '' && '--select--'}
              {option.name !== '' && option.name !== 'other' && option.name}
              {option.name === 'other' && 'other'}
            </option>
          })}
        </select>
      
        {values.manufacturer === 'other' && <input 
          type="text"
          name="manufacturer_other"
          onChange={handleChange}
          value={values.manufacturer_other}
        />}
      </label>

      <label>Model:
      
        <select
          name="model"
          onChange={handleChange}
        >
          {modelsData.map(option => {
            return <option
              key={option.name}
              value={option.name}
            >
              {option.name === '' && '--select--'}
              {option.name !== '' && option.name !== 'other' && option.name}
              {option.name === 'other' && 'other'}
            </option>
          })}
        </select>
      
        {values.model === 'other' && <input 
          type="text"
          name="model_other"
          onChange={handleChange}
          value={values.model_other}
        />}
      </label>
      
      <label>Memory:
        <select
          name="memory"
          onChange={handleChange}
        >
          {memoriesData.map(option => {
            return <option
              key={option.name}
              value={option.name}
            >
              {option.name === '' && '--select--'}
              {option.name !== '' && option.name !== 'other' && option.name}
              {option.name === 'other' && 'other'}
            </option>
          })}
        </select>
      
        {values.memory === 'other' && <input 
          type="text"
          name="memory_other"
          onChange={handleChange}
          value={values.memory_other}
        />}
      </label>
      
      <label>Color:
        <select
          name="color"
          onChange={handleChange}
        >
          {colorsData.map(option => {
            return <option
              key={option.name}
              value={option.name}
            >
              {option.name === '' && '--select--'}
              {option.name !== '' && option.name !== 'other' && option.name}
              {option.name === 'other' && 'other'}
            </option>
          })}
        </select>
      
        {values.color === 'other' && <input 
          type="text"
          name="color_other"
          onChange={handleChange}
          value={values.color_other}
        />}
      </label>
      
    </div>
    
    <div
      className="device-selection-form-action-area"
    >
      <button
        onClick={handleDispatch}
      >Select Device</button>
      <button 
        className="secondary" 
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
          setValues(initialValues);
        }}
      >Cancel</button>
    </div>

    <style jsx>{`
      .device-selection-form {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        padding-bottom: 4rem;
      }
      
      .device-selection-form-input-area {
        width: 90%;
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }
      

      .device-selection-form-display-text {
        position: sticky;
        top: 0;
        width: 100%;
        background-color: var(--grayish-blue);
        padding: 2rem;
        box-shadow: 0 0 .5rem black;
      }

      label {
        padding: 1rem 0;
        color: var(--white);
        border-radius: 1rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: .5rem;
      }
      
      select {
        padding: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
        border-radius: 1rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: transparent;
      }

      input[type="text"] {
        padding: 1rem;
        border: .2rem solid var(--teal);
        color: var(--teal);
        border-radius: 1rem;;
        width: 100%;
        background-color: transparent;
      }

      .device-selection-form-action-area {
        width: 90%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 1rem;
      }
      
      button {
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        border: .2rem solid var(--teal);
        background-color: var(--teal);
        color: var(--dark-blue);
        font-weight: bold;
      }
      
      button.secondary {
        
        background-color: transparent;
        color: var(--teal);
      }
    `}</style>
  </div>
}