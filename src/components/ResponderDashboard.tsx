import React, { useState } from 'react';

const ResponderDashboard = () => {
  const [areasOfInterest, setAreasOfInterest] = useState([
    { area: '', severity: '' },
    { area: '', severity: '' },
    { area: '', severity: '' },
  ]);
  const [trafficAmount, setTrafficAmount] = useState('');
  const [personnelAvailable, setPersonnelAvailable] = useState({
    police: 0,
    paramedics: 0,
    fireDept: 0,
  });
  const [personnelRequested, setPersonnelRequested] = useState({
    police: false,
    paramedics: false,
    fireDept: false,
  });
  const [disasterType, setDisasterType] = useState('');
  const [disasterDetails, setDisasterDetails] = useState('');

  const severityLevels = [
    'Informational',
    'Advisory',
    'Warning',
    'Critical',
    'Catastrophic',
  ];

  const handleAreaChange = (index, field, value) => {
    const updatedAreas = [...areasOfInterest];
    updatedAreas[index][field] = value;
    setAreasOfInterest(updatedAreas);
  };

  const handlePersonnelAvailableChange = (type, value) => {
    setPersonnelAvailable({
      ...personnelAvailable,
      [type]: Number(value),
    });
  };

  const handlePersonnelRequestedChange = (type) => {
    setPersonnelRequested({
      ...personnelRequested,
      [type]: !personnelRequested[type],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data as needed
    console.log({
      areasOfInterest,
      trafficAmount,
      personnelAvailable,
      personnelRequested,
      disasterType,
      disasterDetails,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Responder Dashboard</h1>
      <form onSubmit={handleSubmit}>
        {areasOfInterest.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <label>
              Area of Interest {index + 1}:
              <input
                type="text"
                value={item.area}
                onChange={(e) =>
                  handleAreaChange(index, 'area', e.target.value)
                }
                style={{ marginLeft: '10px', width: '300px' }}
              />
            </label>
            <label style={{ marginLeft: '20px' }}>
              Severity Type (Area {index + 1}):
              <select
                value={item.severity}
                onChange={(e) =>
                  handleAreaChange(index, 'severity', e.target.value)
                }
                style={{ marginLeft: '10px', width: '200px' }}
              >
                <option value="">Select Severity</option>
                {severityLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
        <div style={{ marginBottom: '20px' }}>
          <label>
            Amount of Traffic:
            <input
              type="text"
              value={trafficAmount}
              onChange={(e) => setTrafficAmount(e.target.value)}
              style={{ marginLeft: '10px', width: '100px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Personnel Available:
            <div style={{ marginLeft: '10px' }}>
              <label>
                Police:
                <input
                  type="number"
                  value={personnelAvailable.police}
                  onChange={(e) =>
                    handlePersonnelAvailableChange('police', e.target.value)
                  }
                  style={{ marginLeft: '5px', width: '60px' }}
                />
              </label>
              <label style={{ marginLeft: '20px' }}>
                Paramedics:
                <input
                  type="number"
                  value={personnelAvailable.paramedics}
                  onChange={(e) =>
                    handlePersonnelAvailableChange('paramedics', e.target.value)
                  }
                  style={{ marginLeft: '5px', width: '60px' }}
                />
              </label>
              <label style={{ marginLeft: '20px' }}>
                Fire Department:
                <input
                  type="number"
                  value={personnelAvailable.fireDept}
                  onChange={(e) =>
                    handlePersonnelAvailableChange('fireDept', e.target.value)
                  }
                  style={{ marginLeft: '5px', width: '60px' }}
                />
              </label>
            </div>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Type of Disaster:
            <input
              type="text"
              value={disasterType}
              onChange={(e) => setDisasterType(e.target.value)}
              style={{ marginLeft: '10px', width: '300px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Details of Disaster:
            <textarea
              value={disasterDetails}
              onChange={(e) => setDisasterDetails(e.target.value)}
              style={{ display: 'block', width: '100%', height: '100px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Emergency Personnel Requested:
            <div style={{ marginLeft: '10px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={personnelRequested.police}
                  onChange={() => handlePersonnelRequestedChange('police')}
                />
                Police
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  checked={personnelRequested.paramedics}
                  onChange={() => handlePersonnelRequestedChange('paramedics')}
                />
                Paramedics
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  checked={personnelRequested.fireDept}
                  onChange={() => handlePersonnelRequestedChange('fireDept')}
                />
                Fire Department
              </label>
            </div>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResponderDashboard;