export enum VehiculeType {
  MOTORCYCLE = 1,
  CAR = 2,
  TRUCK = 3,
}

export const empty = {
  vehicules: [],
  availablePlaces: 8,
  totalPlaces: 8,
};
export const slot1 = {
  vehicules: [
    VehiculeType.CAR,
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
  ],
  availablePlaces: 2,
  totalPlaces: 8,
};
export const slot2 = {
  vehicules: [
    VehiculeType.MOTORCYCLE,
  ],
  availablePlaces: 7,
  totalPlaces: 8,
};
export const slot3 = {
  vehicules: [
    VehiculeType.TRUCK,
  ],
  availablePlaces: 0,
  totalPlaces: 8,
};
export const slot4 = {
  vehicules: [
    VehiculeType.CAR,
    VehiculeType.CAR,
  ],
  availablePlaces: 0,
  totalPlaces: 8,
};
export const slot5 = {
  vehicules: [
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
  ],
  availablePlaces: 6,
  totalPlaces: 8,
};
export const slot6 = {
  vehicules: [
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
  ],
  availablePlaces: 5,
  totalPlaces: 8,
};
export const slot7 = {
  vehicules: [
    VehiculeType.MOTORCYCLE,
    VehiculeType.CAR,
  ],
  availablePlaces: 5,
  totalPlaces: 8,
};
export const slot8 = {
  vehicules: [
    VehiculeType.MOTORCYCLE,
    VehiculeType.CAR,
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
  ],
  availablePlaces: 1,
  totalPlaces: 8,
};
export const slot9 = {
  vehicules: [
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
    VehiculeType.MOTORCYCLE,
  ],
  availablePlaces: 4,
  totalPlaces: 8,
};

export const PARKING_LOT = [
  slot1, empty, empty, empty, slot2, empty, // first row
  empty, empty, empty, empty, empty, empty, // second row
  empty, empty, slot3, empty, empty, empty, // third row
  slot4, empty, empty, slot5, slot6, empty, // fourth row
  empty, slot7, slot8, slot9, empty, empty, // fifth row
];

export const PARKING_LOT_COPY = [
  ...JSON.parse(JSON.stringify(PARKING_LOT))
];
