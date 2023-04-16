// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  let distance = Math.abs(pickupLocation - 42);
  return distance;
}

function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  const distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const distanceTravelled = Math.abs(destination - start) * 264;
  return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = Math.abs(destination - start) * 264;
  if (distanceTravelled <= 400) {
    return distanceTravelled * 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    return 25;
  } else if (distanceTravelled > 2500) {
    return "cannot travel that far";
  }
}
