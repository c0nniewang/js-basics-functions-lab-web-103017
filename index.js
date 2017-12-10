function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) > 2500) {
    return 'cannot travel that far';
  }

  const distance = distanceTravelledInFeet(start, end);

  if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return distance * 0.02;
  } else {
    return 0;
  }
}