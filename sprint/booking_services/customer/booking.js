// Simulate pre-filled sender data
document.getElementById('senderName').value = localStorage.getItem("username") || "John Doe";
document.getElementById('senderAddress').value = "123, ABC Street, City";
document.getElementById('senderContact').value = "9876543210";

// Handle booking form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get inputs
  const weight = parseFloat(document.getElementById("parcelWeight").value);
  const speed = document.getElementById("shippingSpeed").value;
  const packaging = document.getElementById("packagingOption").value;
  const costField = document.getElementById("calculatedCost");

  // Validate weight
  if (isNaN(weight) || weight <= 0) {
    alert("Please enter a valid parcel weight.");
    return;
  }

  // Base cost and dynamic charges
  let base = 50;
  let speedCharge = 0;
  let speedMessage = "";

  switch (speed) {
    case "standard":
      speedCharge = 0;
      speedMessage = "No extra charge for Standard delivery.";
      break;
    case "express":
      speedCharge = 100;
      speedMessage = "₹100 extra for Express delivery.";
      break;
    case "overnight":
      speedCharge = 200;
      speedMessage = "₹200 extra for Overnight delivery.";
      break;
    default:
      alert("Please select a delivery speed.");
      return;
  }

  const packagingCharge = {
    standard: 10,
    custom: 20,
    eco: 15,
    fragile: 30
  }[packaging] || 0;

  let total = base + weight * 10 + speedCharge + packagingCharge;

  // Optional Services
  if (document.getElementById("insurance").checked) {
    total += 25;
  }
  if (document.getElementById("tracking").checked) {
    total += 15;
  }

  // Display cost
  costField.value = `₹${total.toFixed(2)}`;

  // Optionally submit to backend here
  alert("Booking successful! Total cost: ₹" + total.toFixed(2));
});

// Display extra charge message for shipping speed
const shippingSelect = document.getElementById("shippingSpeed");
const shippingChargeDisplay = document.getElementById("shippingChargeMessage");

shippingSelect.addEventListener("change", function () {
  const value = shippingSelect.value;
  let message = "";

  switch (value) {
    case "standard":
      message = "No extra charge for Standard delivery.";
      break;
    case "express":
      message = "₹100 extra for Express delivery.";
      break;
    case "overnight":
      message = "₹200 extra for Overnight delivery.";
      break;
    default:
      message = "";
  }

  shippingChargeDisplay.textContent = message;
});

//Display extra charges message for packaging
const packagingSelect=document.getElementById("packagingOption");
const packagingChargeDisplay=document.getElementById("packagingChargeMessage");

packagingSelect.addEventListener("change",function(){
  const value=packagingSelect.value;
  let message="";

  switch (value) {
    case "standard":
      message="₹10 extra charges for STANDARD packaging";
      break;
    
    case "custom":
      message="₹20 extra charges for CUSTOM packaging";
      break;
    
    case "eco":
      message="₹15 extra charges for ECO packaging";
      break;
    
    case "fragile":
      message="₹30 extra charges for CUSTOM packaging";
      break;

    default:
      message=""
      break;
  }

  packagingChargeDisplay.textContent=message;
});
