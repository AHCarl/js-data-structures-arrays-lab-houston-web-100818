// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function appendDriver(name) {
  let newDrivers = [drivers, ...name]
  return newDrivers
}

function prependDriver(name) {
  let newDrivers = [...name, drivers]
}

function remove