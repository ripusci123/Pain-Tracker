document.getElementById('addEntryBtn').addEventListener('click', function () {
  const painLevel = document.getElementById('painLevel').value;
  const painArea = document.getElementById('painArea').value;
  const painDuration = document.getElementById('painDuration').value;
  const patientName = document.getElementById('patientName').value;
  const patientAge = document.getElementById('patientAge').value;
  if (!patientName || !patientAge || !painLevel || !painDuration) {
    alert('Please fill in all fields.');
    return;
  }

  let medicine = '';
  let dose = '';

  if (painArea === "Bone Pain") {
    if (patientAge < 30) {
      if (painDuration <= 3) {
        medicine = "Low Dose Acetaminophen";
        dose = "325mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Low Dose Ibuprofen";
        dose = "200mg every 4-6 hours";
      } else {
        medicine = "Low Dose Naproxen";
        dose = "220mg every 8-12 hours";
      }
    } else if (patientAge < 60) {
      if (painDuration <= 3) {
        medicine = "Medium Dose Acetaminophen";
        dose = "500mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Medium Dose Ibuprofen";
        dose = "400mg every 4-6 hours";
      } else {
        medicine = "Medium Dose Naproxen";
        dose = "440mg every 8-12 hours";
      }
    } else {
      if (painDuration <= 3) {
        medicine = "High Dose Acetaminophen";
        dose = "650mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "High Dose Ibuprofen";
        dose = "600mg every 4-6 hours";
      } else {
        medicine = "High Dose Naproxen";
        dose = "660mg every 8-12 hours";
      }
    }
  } else if (painArea === "Joint Pain") {
    if (patientAge < 30) {
      if (painDuration <= 3) {
        medicine = "Low Dose Acetaminophen";
        dose = "325mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Low Dose Ibuprofen";
        dose = "200mg every 4-6 hours";
      } else {
        medicine = "Low Dose Naproxen";
        dose = "220mg every 8-12 hours";
      }
    } else if (patientAge < 60) {
      if (painDuration <= 3) {
        medicine = "Medium Dose Acetaminophen";
        dose = "500mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Medium Dose Ibuprofen";
        dose = "400mg every 4-6 hours";
      } else {
        medicine = "Medium Dose Naproxen";
        dose = "440mg every 8-12 hours";
      }
    } else {
      if (painDuration <= 3) {
        medicine = "High Dose Acetaminophen";
        dose = "650mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "High Dose Ibuprofen";
        dose = "600mg every 4-6 hours";
      } else {
        medicine = "High Dose Naproxen";
        dose = "660mg every 8-12 hours";
      }
    }
  } else if (painArea === "Muscle Pain") {
    if (patientAge < 30) {
      if (painDuration <= 3) {
        medicine = "Low Dose Acetaminophen";
        dose = "325mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Low Dose Ibuprofen";
        dose = "200mg every 4-6 hours";
      } else {
        medicine = "Low Dose Naproxen";
        dose = "220mg every 8-12 hours";
      }
    } else if (patientAge < 60) {
      if (painDuration <= 3) {
        medicine = "Medium Dose Acetaminophen";
        dose = "500mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Medium Dose Ibuprofen";
        dose = "400mg every 4-6 hours";
      } else {
        medicine = "Medium Dose Naproxen";
        dose = "440mg every 8-12 hours";
      }
    } else {
      if (painDuration <= 3) {
        medicine = "High Dose Acetaminophen";
        dose = "650mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "High Dose Ibuprofen";
        dose = "600mg every 4-6 hours";
      } else {
        medicine = "High Dose Naproxen";
        dose = "660mg every 8-12 hours";
      }
    }
  }else if (painArea === "Headache") {
    if (patientAge < 30) {
      if (painDuration <= 3) {
        medicine = "Low Dose Acetaminophen";
        dose = "325mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Low Dose Ibuprofen";
        dose = "200mg every 4-6 hours";
      } else {
        medicine = "Low Dose Naproxen";
        dose = "220mg every 8-12 hours";
      }
    } else if (patientAge < 60) {
      if (painDuration <= 3) {
        medicine = "Medium Dose Acetaminophen";
        dose = "500mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "Medium Dose Ibuprofen";
        dose = "400mg every 4-6 hours";
      } else {
        medicine = "Medium Dose Naproxen";
        dose = "440mg every 8-12 hours";
      }
    } else {
      if (painDuration <= 3) {
        medicine = "High Dose Acetaminophen";
        dose = "650mg every 4-6 hours";
      } else if (painDuration <= 7) {
        medicine = "High Dose Ibuprofen";
        dose = "600mg every 4-6 hours";
      } else {
        medicine = "High Dose Naproxen";
        dose = "660mg every 8-12 hours";
      }
    }
  }
    
  

  const entry = document.createElement('div');
  entry.classList.add('entry');
  entry.innerHTML = `
        <p><strong>Name of Patient:</strong> ${patientName}</p>
        <p><strong>Age:</strong> ${patientAge}</p>
        <p><strong>Pain Level:</strong> ${painLevel}</p>
        <p><strong>Pain Area:</strong> ${painArea}</p>
        <p><strong>Pain Duration:</strong> ${painDuration} days</p>
        <p><strong>Recommended Medicine:</strong> ${medicine ? medicine : 'None specified'}</p>
        <p><strong>Dose:</strong> ${dose ? dose : 'None specified'}</p>
    `;
  document.getElementById('entries').appendChild(entry);

 
  document.getElementById('patientName').value = '';
  document.getElementById('patientAge').value = '';
  document.getElementById('painLevel').value = '';
  document.getElementById('painDuration').value = '';

  
  const assumptions = document.createElement('p');
  assumptions.classList.add('assumptions'); // Add the 'assumptions' class
  assumptions.innerHTML = "<strong>Assumptions:</strong> Lack of physical exercise, improper lifting technique, prolonged sitting, overuse of certain muscles, dehydration, muscle strain, and lack of stretching are common causes of pain. To prevent pain, consider the following precautions:<br><br>- Engage in regular physical exercise, including stretching exercises.<br>- Lift objects using proper lifting techniques, ensuring to bend your knees and keep your back straight.<br>- Avoid prolonged sitting and maintain good posture while sitting and standing.<br>- Manage stress through relaxation techniques such as deep breathing, meditation, or yoga.<br>- Ensure ergonomic work setups, including proper chair height, keyboard position, and monitor placement.<br>- Stay hydrated by drinking an adequate amount of water throughout the day.<br>- Take breaks and vary your tasks to avoid overuse of certain muscles.<br>- Practice proper body mechanics during physical activities and avoid sudden, jerky movements.<br>- Incorporate regular stretching routines into your daily activities to improve flexibility and reduce muscle tension.<br>- If you experience persistent or severe pain, consult with a healthcare professional for proper diagnosis and treatment.";
  document.getElementById('entries').appendChild(assumptions);
});
