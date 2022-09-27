const ARCHIPELAGO_PROTOCOL_VERSION = {
  major: 0,
  minor: 3,
  build: 1,
  class: 'Version',
};

// Archipelago server
const DEFAULT_SERVER_PORT = 38281;
let serverSocket = null;
let serverAuthError = false;
let serverPassword = null;

const permissionMap = {
  0: 'Disabled',
  1: 'Enabled',
  2: 'Goal',
  6: 'Auto',
  7: 'Enabled + Auto',
};

// Players in the current game, received from Connected server packet
let playerSlot = null;
let playerTeam = null;
let players = [];
let hintCost = null;

// Location and item maps, populated from localStorage
let apItemsById = {};
let apLocationsById = {};
let ootLocationsByName = {};

// Tracks if auto-scrolling is currently paused
let autoScrollPaused = false;