/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./basic/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./basic/js/entry.js":
/*!***************************!*\
  !*** ./basic/js/entry.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/SourcePatterns */ "./core/SourcePatterns.js");
/* harmony import */ var _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/VeinNode */ "./core/VeinNode.js");
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Utilities */ "./core/Utilities.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");







let canvas, ctx;
let network;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Setup Network with initial conditions
  setupNetwork();

  // Begin animation loop
  requestAnimationFrame(update);
}

// Create the network with initial conditions
let setupNetwork = () => {
  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Set up the auxin sources using pre-made patterns
  let randomSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomSources(500, ctx);
  let gridSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getGridOfSources(60, 60, ctx);

  network.sources = gridSources;

  // Add a set of random root veins throughout scene
  for(let i=0; i<10; i++) {
    network.addVeinNode(
      new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
        null,
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerWidth),
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerHeight)
        ),
        true,
        ctx
      )
    )
  }

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__["setupKeyListeners"])(network);
}

// Main program loop
let update = (timestamp) => {
  network.update();
  network.draw();

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case "r":
      setupNetwork();
      break;
  }
});


// Kick off the application
setup();

/***/ }),

/***/ "./core/AuxinSource.js":
/*!*****************************!*\
  !*** ./core/AuxinSource.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuxinSource; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class AuxinSource {
  constructor(position, ctx, settings = {}) {
    this.position = position;
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.influencingNodes = [];
  }

  draw() {
    // Draw the attraction zone
    if(this.settings.ShowAttractionZones) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.AttractionDistance, this.settings.AttractionDistance, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.AttractionZoneColor;
      this.ctx.fill();
    }

    // Draw the kill zone
    if(this.settings.ShowKillZones) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.KillDistance, this.settings.KillDistance, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.KillZoneColor;
      this.ctx.fill();
    }

    // Draw the auxin source
    if(this.settings.ShowSources) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, 1, 1, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.SourceColor;
      this.ctx.fill();
    }
  }
}

/***/ }),

/***/ "./core/ColorPresets.js":
/*!******************************!*\
  !*** ./core/ColorPresets.js ***!
  \******************************/
/*! exports provided: Light, Dark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dark", function() { return Dark; });
const Light = {
  BackgroundColor: 'rgba(255,255,255,1)',
  SourceColor: 'rgba(0,0,0,.5)',
  VeinColor: 'rgba(0,0,0,1)',
  VeinTipColor: 'rgba(255,0,0,1)',
  AttractionZoneColor: 'rgba(0,255,0,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsColor: 'rgba(0,0,0,.3)'
}

const Dark = {
  BackgroundColor: 'rgba(0,0,0,.9)',
  SourceColor: 'rgba(255,255,255,.5)',
  VeinColor: 'rgba(255,255,255,1)',
  VeinTipColor: 'rgba(0,255,255,1)',
  AttractionZoneColor: 'rgba(255,255,255,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsColor: 'rgba(255,255,255,.3)'
}

/***/ }),

/***/ "./core/Defaults.js":
/*!**************************!*\
  !*** ./core/Defaults.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPresets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPresets */ "./core/ColorPresets.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
    Simulation configurations
  */

  VenationType: 'Open',     // venation can be "Open" or "Closed"
  SegmentLength: 5,         // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 200,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 5,          // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,          // initial pause/unpause state


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowSources: false,           // toggled with 's'
  ShowVeins: true,              // toggled with 'v'
  ShowVeinTips: false,          // toggled with 't'
  ShowAttractionZones: false,   // toggled with 'a'
  ShowKillZones: false,         // toggled with 'k'
  ShowInfluenceLines: false,    // toggled with 'i'
  ShowBounds: true,

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Colors
  Colors: _ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Light"]
});

/***/ }),

/***/ "./core/KeyboardInteractions.js":
/*!**************************************!*\
  !*** ./core/KeyboardInteractions.js ***!
  \**************************************/
/*! exports provided: setupKeyListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupKeyListeners", function() { return setupKeyListeners; });
function setupKeyListeners(networks) {
  if(!(networks instanceof Array)) {
    networks = [networks];
  }

  document.addEventListener('keypress', (e) => {
    switch(e.key) {
      // Space = pause/unpause
      case ' ':
        for(let network of networks) {
          network.togglePause();
        }

        break;

      // v = toggle vein visibility
      case 'v':
        for(let network of networks) {
          network.toggleVeins();
        }

        break;

      // s = toggle auxin source visibility
      case 's':
        for(let network of networks) {
          network.toggleSources();
        }

        break;

      // a = toggle attraction zone visibility
      case 'a':
        for(let network of networks) {
          network.toggleAttractionZones();
        }

        break;

      // t = toggle vein tip visibility
      case 't':
        for(let network of networks) {
          network.toggleVeinTips();
        }

        break;

      // k = toggle kill zone visibility
      case 'k':
        for(let network of networks) {
          network.toggleKillZones();
        }

        break;

      // i = toggle influence lines
      case 'i':
        for(let network of networks) {
          network.toggleInfluenceLines();
        }

        break;
    }
  });
}

/***/ }),

/***/ "./core/Network.js":
/*!*************************!*\
  !*** ./core/Network.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Network; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");
/* harmony import */ var kdbush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kdbush */ "./node_modules/kdbush/src/index.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");





class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.sources = [];  // sources (AuxinSources) attract vein nodes
    this.nodes = [];    // nodes (VeinNodes) are connected to form veins

    this.nodesIndex;    // kd-bush spatial index for all nodes

    this.buildSpatialIndices();
  }

  update() {
    // Skip iteration if paused
    if(this.settings.IsPaused) {
      return;
    }

    // Associate auxin sources with nearby vein nodes to figure out where growth should occur
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, only associate this source with its closest vein node
        case 'Open':
          let closestNode = this.getClosestNode(source, this.getNodesInAttractionZone(source));

          if(closestNode != null) {
            closestNode.influencedBy.push(sourceID);
            source.influencingNodes = [closestNode];
          }

          break;

        // For closed venation, associate this source with all nodes in its relative neighborhood
        case 'Closed':
          let neighborhoodNodes = this.getRelativeNeighborNodes(source);
          let nodesInKillZone = this.getNodesInKillZone(source);

          // Exclude nodes that are in the source's kill zone (these should stop growing)
          let nodesToGrow = neighborhoodNodes.filter((neighborNode) => {
            return !nodesInKillZone.includes(neighborNode);
          });

          source.influencingNodes = nodesToGrow;

          for(let node of nodesToGrow) {
            node.influencedBy.push(sourceID);
          }

          break;
      }
    }

    // Grow the network by adding new vein nodes onto any nodes being influenced by sources
    for(let node of this.nodes) {
      if(node.influencedBy.length > 0) {
        let averageDirection = this.getAverageDirection(node, node.influencedBy.map(id => this.sources[id]));
        let nextNode = node.getNextNode(averageDirection);
        this.nodes.push(nextNode);
      }

      node.influencedBy = [];
    }

    // Remove any auxin sources that have been reached by their associated vein nodes
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, remove the source as soon as any vein node reaches it
        case 'Open':
          if(source.reached) {
            this.sources.splice(sourceID, 1);
          }

          break;

        // For closed venation, remove the source only when all associated vein nodes have reached it
        case 'Closed':
          if(source.influencingNodes.length === 0) {
            this.sources.splice(sourceID, 1);
          }

          break;
      }
    }

    // Rebuild spatial indices
    this.buildSpatialIndices();
  }

  draw() {
    // Erase the canvas
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.ctx.beginPath();
    this.ctx.fillStyle = this.settings.Colors.BackgroundColor;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw vein nodes
    if(this.settings.ShowVeins) {
      for(let node of this.nodes) {
        node.draw();
      }
    }

    for(let source of this.sources) {
      // Draw auxin sources
      source.draw();

      // Draw lines between each source and the nodes they are influencing
      if(this.settings.ShowInfluenceLines && source.influencingNodes.length > 0) {
        for(let node of source.influencingNodes) {
          this.ctx.beginPath();
          this.ctx.moveTo(source.position.x, source.position.y);
          this.ctx.lineTo(node.position.x, node.position.y);
          this.ctx.strokeStyle = this.settings.Colors.InfluenceLinesColor;
          this.ctx.stroke();
        }
      }
    }
  }

  getRelativeNeighborNodes(source) {
    let fail;

    let nearbyNodes = this.getNodesInAttractionZone(source);
    let relativeNeighbors = [];
    let sourceToP0, sourceToP1, p0ToP1;

    // p0 is a relative neighbor of auxinPos iff
    // for any point p1 that is closer to auxinPos than is p0,
    // p0 is closer to auxinPos than to p1
    for(let p0 of nearbyNodes) {
      fail = false;
      sourceToP0 = p0.position.subtract(source.position, true);

      for(let p1 of nearbyNodes) {
        if(p0 === p1) {
          continue;
        }

        sourceToP1 = p1.position.subtract(source.position, true);

        if(sourceToP1.length() > sourceToP0.length()) {
          continue;
        }

        p0ToP1 = p1.position.subtract(p0.position, true);

        if(sourceToP0.length() > p0ToP1.length()) {
          fail = true;
          break;
        }
      }

      if(!fail) {
        relativeNeighbors.push(p0);
      }
    }

    return relativeNeighbors;
  }

  getNodesInAttractionZone(source) {
    return this.nodesIndex.within(
      source.position.x,
      source.position.y,
      this.settings.AttractionDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getNodesInKillZone(source) {
    return this.nodesIndex.within(
      source.position.x,
      source.position.y,
      this.settings.KillDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getClosestNode(source, nearbyNodes) {
    let closestNode = null,
      record = this.settings.AttractionDistance;

    for(let node of nearbyNodes) {
      let distance = node.position.distance(source.position);

      if(distance < this.settings.KillDistance) {
        source.reached = true;
        closestNode = null;
      } else if(distance < record) {
        closestNode = node;
        record = distance;
      }
    }

    return closestNode;
  }

  getAverageDirection(node, nearbySources) {
    // Add up normalized vectors pointing to each auxin source
    let averageDirection = new vec2__WEBPACK_IMPORTED_MODULE_2__(0,0);

    for(let source of nearbySources) {
      averageDirection.add(
        source.position.subtract(node.position, true).normalize()
      );
    }

    // Add small amount of random "jitter" to avoid getting stuck between two auxin sources and endlessly generating nodes in the same place
    // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
    averageDirection.add(new vec2__WEBPACK_IMPORTED_MODULE_2__(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1))).normalize();

    averageDirection.divide(node.influencedBy.length).normalize();

    return averageDirection;
  }

  addVeinNode(node) {
    this.nodes.push(node);
    this.buildSpatialIndices();
  }

  buildSpatialIndices() {
    this.nodesIndex = new kdbush__WEBPACK_IMPORTED_MODULE_1__["default"](this.nodes, p => p.position.x, p => p.position.y);
  }

  toggleVeins() {
    this.settings.ShowVeins = !this.settings.ShowVeins;
  }

  toggleVeinTips() {
    this.settings.ShowVeinTips = !this.settings.ShowVeinTips;

    for(let node of this.nodes) {
      node.settings.ShowVeinTips = !node.settings.ShowVeinTips;
    }
  }

  toggleSources() {
    this.settings.ShowSources = !this.settings.ShowSources;
  }

  toggleAttractionZones() {
    this.settings.ShowAttractionZones = !this.settings.ShowAttractionZones;

    for(let source of this.sources) {
      source.settings.ShowAttractionZones = !source.settings.ShowAttractionZones;
    }
  }

  toggleKillZones() {
    this.settings.ShowKillZones = !this.settings.ShowKillZones;

    for(let source of this.sources) {
      source.settings.ShowKillZones = !source.settings.ShowKillZones;
    }
  }

  toggleInfluenceLines() {
    this.settings.ShowInfluenceLines = !this.settings.ShowInfluenceLines;
  }

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}

/***/ }),

/***/ "./core/SourcePatterns.js":
/*!********************************!*\
  !*** ./core/SourcePatterns.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourcePatterns; });
/* harmony import */ var _AuxinSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuxinSource */ "./core/AuxinSource.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");




class SourcePatterns {
  constructor() {}

  static getRandomSources(numSources, ctx, bounds = undefined) {
    let nodes = [];
    let x, y;

    for(let i=0; i<numSources; i++) {
      x = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerWidth);
      y = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerHeight);

      if((bounds != undefined && bounds.contains(x,y)) || bounds == undefined) {
        nodes.push(
          new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
            new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x, y),
            ctx
          )
        );
      }
    }

    return nodes;
  }

  static getGridOfSources(numRows, numColumns, ctx, bounds = undefined) {
    let nodes = [];
    let x, y;

    for(let i=0; i<=numRows; i++) {
      for(let j=0; j<=numColumns; j++) {
        x = (window.innerWidth / numColumns) * j + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-10,10);
        y = (window.innerHeight / numRows) * i + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-10,10);

        if((bounds != undefined && bounds.contains(x,y)) || bounds == undefined) {
          nodes.push(
            new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
              new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x,y),
              ctx
            )
          );
        }
      }
    }

    return nodes;
  }
}

/***/ }),

/***/ "./core/Utilities.js":
/*!***************************!*\
  !*** ./core/Utilities.js ***!
  \***************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.random() * (max - min) + min;
}

/***/ }),

/***/ "./core/VeinNode.js":
/*!**************************!*\
  !*** ./core/VeinNode.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VeinNode; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class VeinNode {
  constructor(parent, position, isTip, ctx, settings) {
    this.parent = parent;
    this.position = position;
    this.isTip = isTip;
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.influencedBy = [];
  }

  draw() {
    if(this.parent != null) {
      if(this.settings.VeinRenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.strokeStyle = this.settings.Colors.VeinTipColor;
          this.ctx.lineWidth = 2;
        } else {
          this.ctx.strokeStyle = this.settings.Colors.VeinColor;
          this.ctx.lineWidth = 1;
        }

        this.ctx.stroke();

      } else if(this.settings.VeinRenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(
          this.position.x,
          this.position.y,
          1,
          1,
          0,
          0,
          Math.PI * 2
        );  // TODO: vary dot radius based on algorithm

        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.fillStyle = this.settings.Colors.VeinTipColor;
        } else {
          this.ctx.fillStyle = this.settings.Colors.VeinColor;
        }

        this.ctx.fill();
      }
    }
  }

  getNextNode(averageSourceDirection) {
    this.isTip = false;
    this.nextPosition = this.position.add(averageSourceDirection.multiply(this.settings.SegmentLength), true);

    return new VeinNode(
      this,
      this.nextPosition,
      true,
      this.ctx,
      this.settings
    );
  }
}

/***/ }),

/***/ "./node_modules/kdbush/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/kdbush/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KDBush; });
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ "./node_modules/kdbush/src/sort.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range */ "./node_modules/kdbush/src/range.js");
/* harmony import */ var _within__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./within */ "./node_modules/kdbush/src/within.js");





const defaultGetX = p => p[0];
const defaultGetY = p => p[1];

class KDBush {
    constructor(points, getX = defaultGetX, getY = defaultGetY, nodeSize = 64, ArrayType = Float64Array) {
        this.nodeSize = nodeSize;
        this.points = points;

        const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;

        const ids = this.ids = new IndexArrayType(points.length);
        const coords = this.coords = new ArrayType(points.length * 2);

        for (let i = 0; i < points.length; i++) {
            ids[i] = i;
            coords[2 * i] = getX(points[i]);
            coords[2 * i + 1] = getY(points[i]);
        }

        Object(_sort__WEBPACK_IMPORTED_MODULE_0__["default"])(ids, coords, nodeSize, 0, ids.length - 1, 0);
    }

    range(minX, minY, maxX, maxY) {
        return Object(_range__WEBPACK_IMPORTED_MODULE_1__["default"])(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    }

    within(x, y, r) {
        return Object(_within__WEBPACK_IMPORTED_MODULE_2__["default"])(this.ids, this.coords, x, y, r, this.nodeSize);
    }
}


/***/ }),

/***/ "./node_modules/kdbush/src/range.js":
/*!******************************************!*\
  !*** ./node_modules/kdbush/src/range.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    const stack = [0, ids.length - 1, 0];
    const result = [];
    let x, y;

    while (stack.length) {
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();

        if (right - left <= nodeSize) {
            for (let i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }

        const m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        const nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}


/***/ }),

/***/ "./node_modules/kdbush/src/sort.js":
/*!*****************************************!*\
  !*** ./node_modules/kdbush/src/sort.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortKD; });

function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    const m = (left + right) >> 1;

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        const t = coords[2 * k + inc];
        let i = left;
        let j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) i++;
            while (coords[2 * j + inc] > t) j--;
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


/***/ }),

/***/ "./node_modules/kdbush/src/within.js":
/*!*******************************************!*\
  !*** ./node_modules/kdbush/src/within.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });

function within(ids, coords, qx, qy, r, nodeSize) {
    const stack = [0, ids.length - 1, 0];
    const result = [];
    const r2 = r * r;

    while (stack.length) {
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();

        if (right - left <= nodeSize) {
            for (let i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            }
            continue;
        }

        const m = Math.floor((left + right) / 2);

        const x = coords[2 * m];
        const y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        const nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}


/***/ }),

/***/ "./node_modules/vec2/vec2.js":
/*!***********************************!*\
  !*** ./node_modules/vec2/vec2.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function inject(clean, precision, undef) {

  var isArray = function (a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  };

  var defined = function(a) {
    return a !== undef;
  };

  function Vec2(x, y) {
    if (!(this instanceof Vec2)) {
      return new Vec2(x, y);
    }

    if (isArray(x)) {
      y = x[1];
      x = x[0];
    } else if('object' === typeof x && x) {
      y = x.y;
      x = x.x;
    }

    this.x = Vec2.clean(x || 0);
    this.y = Vec2.clean(y || 0);
  }

  Vec2.prototype = {
    change : function(fn) {
      if (typeof fn === 'function') {
        if (this.observers) {
          this.observers.push(fn);
        } else {
          this.observers = [fn];
        }
      } else if (this.observers && this.observers.length) {
        for (var i=this.observers.length-1; i>=0; i--) {
          this.observers[i](this, fn);
        }
      }

      return this;
    },

    ignore : function(fn) {
      if (this.observers) {
        if (!fn) {
          this.observers = [];
        } else {
          var o = this.observers, l = o.length;
          while(l--) {
            o[l] === fn && o.splice(l, 1);
          }
        }
      }
      return this;
    },

    // set x and y
    set: function(x, y, notify) {
      if('number' != typeof x) {
        notify = y;
        y = x.y;
        x = x.x;
      }

      if(this.x === x && this.y === y) {
        return this;
      }

      var orig = null;
      if (notify !== false && this.observers && this.observers.length) {
        orig = this.clone();
      }

      this.x = Vec2.clean(x);
      this.y = Vec2.clean(y);

      if(notify !== false) {
        return this.change(orig);
      }
    },

    // reset x and y to zero
    zero : function() {
      return this.set(0, 0);
    },

    // return a new vector with the same component values
    // as this one
    clone : function() {
      return new (this.constructor)(this.x, this.y);
    },

    // negate the values of this vector
    negate : function(returnNew) {
      if (returnNew) {
        return new (this.constructor)(-this.x, -this.y);
      } else {
        return this.set(-this.x, -this.y);
      }
    },

    // Add the incoming `vec2` vector to this vector
    add : function(x, y, returnNew) {

      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      }

      x += this.x;
      y += this.y;


      if (!returnNew) {
        return this.set(x, y);
      } else {
        // Return a new vector if `returnNew` is truthy
        return new (this.constructor)(x, y);
      }
    },

    // Subtract the incoming `vec2` from this vector
    subtract : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      }

      x = this.x - x;
      y = this.y - y;

      if (!returnNew) {
        return this.set(x, y);
      } else {
        // Return a new vector if `returnNew` is truthy
        return new (this.constructor)(x, y);
      }
    },

    // Multiply this vector by the incoming `vec2`
    multiply : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      } else if (typeof y != 'number') {
        returnNew = y;
        y = x;
      }

      x *= this.x;
      y *= this.y;

      if (!returnNew) {
        return this.set(x, y);
      } else {
        return new (this.constructor)(x, y);
      }
    },

    // Rotate this vector. Accepts a `Rotation` or angle in radians.
    //
    // Passing a truthy `inverse` will cause the rotation to
    // be reversed.
    //
    // If `returnNew` is truthy, a new
    // `Vec2` will be created with the values resulting from
    // the rotation. Otherwise the rotation will be applied
    // to this vector directly, and this vector will be returned.
    rotate : function(r, inverse, returnNew) {
      var
      x = this.x,
      y = this.y,
      cos = Math.cos(r),
      sin = Math.sin(r),
      rx, ry;

      inverse = (inverse) ? -1 : 1;

      rx = cos * x - (inverse * sin) * y;
      ry = (inverse * sin) * x + cos * y;

      if (returnNew) {
        return new (this.constructor)(rx, ry);
      } else {
        return this.set(rx, ry);
      }
    },

    // Calculate the length of this vector
    length : function() {
      var x = this.x, y = this.y;
      return Math.sqrt(x * x + y * y);
    },

    // Get the length squared. For performance, use this instead of `Vec2#length` (if possible).
    lengthSquared : function() {
      var x = this.x, y = this.y;
      return x*x+y*y;
    },

    // Return the distance betwen this `Vec2` and the incoming vec2 vector
    // and return a scalar
    distance : function(vec2) {
      var x = this.x - vec2.x;
      var y = this.y - vec2.y;
      return Math.sqrt(x*x + y*y);
    },

    // Given Array of Vec2, find closest to this Vec2.
    nearest : function(others) {
      var
      shortestDistance = Number.MAX_VALUE,
      nearest = null,
      currentDistance;

      for (var i = others.length - 1; i >= 0; i--) {
        currentDistance = this.distance(others[i]);
        if (currentDistance <= shortestDistance) {
          shortestDistance = currentDistance;
          nearest = others[i];
        }
      }

      return nearest;
    },

    // Convert this vector into a unit vector.
    // Returns the length.
    normalize : function(returnNew) {
      var length = this.length();

      // Collect a ratio to shrink the x and y coords
      var invertedLength = (length < Number.MIN_VALUE) ? 0 : 1/length;

      if (!returnNew) {
        // Convert the coords to be greater than zero
        // but smaller than or equal to 1.0
        return this.set(this.x * invertedLength, this.y * invertedLength);
      } else {
        return new (this.constructor)(this.x * invertedLength, this.y * invertedLength);
      }
    },

    // Determine if another `Vec2`'s components match this one's
    // also accepts 2 scalars
    equal : function(v, w) {
      if (typeof v != 'number') {
        if (isArray(v)) {
          w = v[1];
          v = v[0];
        } else {
          w = v.y;
          v = v.x;
        }
      }

      return (Vec2.clean(v) === this.x && Vec2.clean(w) === this.y);
    },

    // Return a new `Vec2` that contains the absolute value of
    // each of this vector's parts
    abs : function(returnNew) {
      var x = Math.abs(this.x), y = Math.abs(this.y);

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Return a new `Vec2` consisting of the smallest values
    // from this vector and the incoming
    //
    // When returnNew is truthy, a new `Vec2` will be returned
    // otherwise the minimum values in either this or `v` will
    // be applied to this vector.
    min : function(v, returnNew) {
      var
      tx = this.x,
      ty = this.y,
      vx = v.x,
      vy = v.y,
      x = tx < vx ? tx : vx,
      y = ty < vy ? ty : vy;

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Return a new `Vec2` consisting of the largest values
    // from this vector and the incoming
    //
    // When returnNew is truthy, a new `Vec2` will be returned
    // otherwise the minimum values in either this or `v` will
    // be applied to this vector.
    max : function(v, returnNew) {
      var
      tx = this.x,
      ty = this.y,
      vx = v.x,
      vy = v.y,
      x = tx > vx ? tx : vx,
      y = ty > vy ? ty : vy;

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Clamp values into a range.
    // If this vector's values are lower than the `low`'s
    // values, then raise them.  If they are higher than
    // `high`'s then lower them.
    //
    // Passing returnNew as true will cause a new Vec2 to be
    // returned.  Otherwise, this vector's values will be clamped
    clamp : function(low, high, returnNew) {
      var ret = this.min(high, true).max(low);
      if (returnNew) {
        return ret;
      } else {
        return this.set(ret.x, ret.y);
      }
    },

    // Perform linear interpolation between two vectors
    // amount is a decimal between 0 and 1
    lerp : function(vec, amount, returnNew) {
      return this.add(vec.subtract(this, true).multiply(amount), returnNew);
    },

    // Get the skew vector such that dot(skew_vec, other) == cross(vec, other)
    skew : function(returnNew) {
      if (!returnNew) {
        return this.set(-this.y, this.x)
      } else {
        return new (this.constructor)(-this.y, this.x);
      }
    },

    // calculate the dot product between
    // this vector and the incoming
    dot : function(b) {
      return Vec2.clean(this.x * b.x + b.y * this.y);
    },

    // calculate the perpendicular dot product between
    // this vector and the incoming
    perpDot : function(b) {
      return Vec2.clean(this.x * b.y - this.y * b.x);
    },

    // Determine the angle between two vec2s
    angleTo : function(vec) {
      return Math.atan2(this.perpDot(vec), this.dot(vec));
    },

    // Divide this vector's components by a scalar
    divide : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      } else if (typeof y != 'number') {
        returnNew = y;
        y = x;
      }

      if (x === 0 || y === 0) {
        throw new Error('division by zero')
      }

      if (isNaN(x) || isNaN(y)) {
        throw new Error('NaN detected');
      }

      if (returnNew) {
        return new (this.constructor)(this.x / x, this.y / y);
      }

      return this.set(this.x / x, this.y / y);
    },

    isPointOnLine : function(start, end) {
      return (start.y - this.y) * (start.x - end.x) ===
             (start.y - end.y) * (start.x - this.x);
    },

    toArray: function() {
      return [this.x, this.y];
    },

    fromArray: function(array) {
      return this.set(array[0], array[1]);
    },
    toJSON: function () {
      return {x: this.x, y: this.y};
    },
    toString: function() {
      return '(' + this.x + ', ' + this.y + ')';
    },
    constructor : Vec2
  };

  Vec2.fromArray = function(array, ctor) {
    return new (ctor || Vec2)(array[0], array[1]);
  };

  // Floating point stability
  Vec2.precision = precision || 8;
  var p = Math.pow(10, Vec2.precision);

  Vec2.clean = clean || function(val) {
    if (isNaN(val)) {
      throw new Error('NaN detected');
    }

    if (!isFinite(val)) {
      throw new Error('Infinity detected');
    }

    if(Math.round(val) === val) {
      return val;
    }

    return Math.round(val * p)/p;
  };

  Vec2.inject = inject;

  if(!clean) {
    Vec2.fast = inject(function (k) { return k; });

    // Expose, but also allow creating a fresh Vec2 subclass.
    if ( true && typeof module.exports == 'object') {
      module.exports = Vec2;
    } else {
      window.Vec2 = window.Vec2 || Vec2;
    }
  }
  return Vec2;
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFzaWMvanMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvU291cmNlUGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9WZWluTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVjMi92ZWMyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVSxFQUFFOztBQUVqRDtBQUNBLFFBQVEsS0FBNkI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJhc2ljLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFzaWMvanMvZW50cnkuanNcIik7XG4iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuLi8uLi9jb3JlL05ldHdvcmsnO1xyXG5pbXBvcnQgU291cmNlUGF0dGVybnMgZnJvbSAnLi4vLi4vY29yZS9Tb3VyY2VQYXR0ZXJucyc7XHJcbmltcG9ydCBWZWluTm9kZSBmcm9tICcuLi8uLi9jb3JlL1ZlaW5Ob2RlJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vLi4vY29yZS9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnO1xyXG5cclxubGV0IGNhbnZhcywgY3R4O1xyXG5sZXQgbmV0d29yaztcclxuXHJcbi8vIENyZWF0ZSBpbml0aWFsIGNvbmRpdGlvbnMgZm9yIHNpbXVsYXRpb25cclxubGV0IHNldHVwID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZXRjaCcpO1xyXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAvLyBTZXR1cCBOZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgc2V0dXBOZXR3b3JrKCk7XHJcblxyXG4gIC8vIEJlZ2luIGFuaW1hdGlvbiBsb29wXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG5sZXQgc2V0dXBOZXR3b3JrID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgc2ltdWxhdGlvbiBvYmplY3RcclxuICBuZXR3b3JrID0gbmV3IE5ldHdvcmsoY3R4KTtcclxuXHJcbiAgLy8gU2V0IHVwIHRoZSBhdXhpbiBzb3VyY2VzIHVzaW5nIHByZS1tYWRlIHBhdHRlcm5zXHJcbiAgbGV0IHJhbmRvbVNvdXJjZXMgPSBTb3VyY2VQYXR0ZXJucy5nZXRSYW5kb21Tb3VyY2VzKDUwMCwgY3R4KTtcclxuICBsZXQgZ3JpZFNvdXJjZXMgPSBTb3VyY2VQYXR0ZXJucy5nZXRHcmlkT2ZTb3VyY2VzKDYwLCA2MCwgY3R4KTtcclxuXHJcbiAgbmV0d29yay5zb3VyY2VzID0gZ3JpZFNvdXJjZXM7XHJcblxyXG4gIC8vIEFkZCBhIHNldCBvZiByYW5kb20gcm9vdCB2ZWlucyB0aHJvdWdob3V0IHNjZW5lXHJcbiAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKykge1xyXG4gICAgbmV0d29yay5hZGRWZWluTm9kZShcclxuICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbmV3IFZlYzIoXHJcbiAgICAgICAgICByYW5kb20od2luZG93LmlubmVyV2lkdGgpLFxyXG4gICAgICAgICAgcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgICAgICApLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vIFNldCB1cCBjb21tb24ga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbGlzdGVuZXJzXHJcbiAgc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yayk7XHJcbn1cclxuXHJcbi8vIE1haW4gcHJvZ3JhbSBsb29wXHJcbmxldCB1cGRhdGUgPSAodGltZXN0YW1wKSA9PiB7XHJcbiAgbmV0d29yay51cGRhdGUoKTtcclxuICBuZXR3b3JrLmRyYXcoKTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbi8vIEtleSBjb21tYW5kcyBzcGVjaWZpYyB0byB0aGlzIHNrZXRjaFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAvLyByID0gcmVzZXQgc2ltdWxhdGlvbiBieSByZWluaXRpYWxpemluZyB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gICAgY2FzZSBcInJcIjpcclxuICAgICAgc2V0dXBOZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8gS2ljayBvZmYgdGhlIGFwcGxpY2F0aW9uXHJcbnNldHVwKCk7IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV4aW5Tb3VyY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjdHgsIHNldHRpbmdzID0ge30pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2luZ05vZGVzID0gW107XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgLy8gRHJhdyB0aGUgYXR0cmFjdGlvbiB6b25lXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5BdHRyYWN0aW9uWm9uZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUga2lsbCB6b25lXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5LaWxsWm9uZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUgYXV4aW4gc291cmNlXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxLCAxLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlNvdXJjZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IExpZ2h0ID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgwLDAsMCwuNSknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMCwwLDAsMSknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0NvbG9yOiAncmdiYSgwLDAsMCwuMyknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjkpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjMpJ1xyXG59IiwiaW1wb3J0IHsgTGlnaHQsIERhcmsgfSBmcm9tICcuL0NvbG9yUHJlc2V0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLyoqXHJcbiAgICBTaW11bGF0aW9uIGNvbmZpZ3VyYXRpb25zXHJcbiAgKi9cclxuXHJcbiAgVmVuYXRpb25UeXBlOiAnT3BlbicsICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggdmVpbiBzZWdtZW50LiBTbWFsbGVyIG51bWJlcnMgbWVhbiBzbW9vdGhlciBsaW5lcywgYnV0IG1vcmUgY29tcHV0YXRpb24gY29zdFxyXG4gIEF0dHJhY3Rpb25EaXN0YW5jZTogMjAwLCAgLy8gcmFkaXVzIG9mIGluZmx1ZW5jZSAoZF9pKSBhcm91bmQgZWFjaCBhdXhpbiBzb3VyY2UgdGhhdCBhdHRyYWN0cyB2ZWluIHNlZ21lbnRzXHJcbiAgS2lsbERpc3RhbmNlOiA1LCAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF1eGluIHNvdXJjZXMgYW5kIHNlZ21lbnRzIHdoZW4gc2VnbWVudHMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAvLyBpbml0aWFsIHBhdXNlL3VucGF1c2Ugc3RhdGVcclxuXHJcblxyXG4gIC8qKlxyXG4gICAgUmVuZGVyaW5nIGNvbmZpZ3VyYXRpb25zXHJcbiAgKi9cclxuXHJcbiAgLy8gVmlzaWJpbGl0eSB0b2dnbGVzXHJcbiAgU2hvd1NvdXJjZXM6IGZhbHNlLCAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdzJ1xyXG4gIFNob3dWZWluczogdHJ1ZSwgICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndidcclxuICBTaG93VmVpblRpcHM6IGZhbHNlLCAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3QnXHJcbiAgU2hvd0F0dHJhY3Rpb25ab25lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IGZhbHNlLCAgICAvLyB0b2dnbGVkIHdpdGggJ2knXHJcbiAgU2hvd0JvdW5kczogdHJ1ZSxcclxuXHJcbiAgLy8gTW9kZXNcclxuICBWZWluUmVuZGVyTW9kZTogJ0xpbmVzJywgIC8vIGRyYXcgdmVpbiBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gQ29sb3JzXHJcbiAgQ29sb3JzOiBMaWdodFxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmtzKSB7XHJcbiAgaWYoIShuZXR3b3JrcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgbmV0d29ya3MgPSBbbmV0d29ya3NdO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAgIC8vIFNwYWNlID0gcGF1c2UvdW5wYXVzZVxyXG4gICAgICBjYXNlICcgJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdiA9IHRvZ2dsZSB2ZWluIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndic6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHMgPSB0b2dnbGUgYXV4aW4gc291cmNlIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVNvdXJjZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYSA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdGlvblpvbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHQgPSB0b2dnbGUgdmVpbiB0aXAgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd0JzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpblRpcHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gayA9IHRvZ2dsZSBraWxsIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdrJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlS2lsbFpvbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGkgPSB0b2dnbGUgaW5mbHVlbmNlIGxpbmVzXHJcbiAgICAgIGNhc2UgJ2knOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVJbmZsdWVuY2VMaW5lcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCBLREJ1c2ggZnJvbSAna2RidXNoJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBzZXR0aW5ncykge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTsgIC8vIHNvdXJjZXMgKEF1eGluU291cmNlcykgYXR0cmFjdCB2ZWluIG5vZGVzXHJcbiAgICB0aGlzLm5vZGVzID0gW107ICAgIC8vIG5vZGVzIChWZWluTm9kZXMpIGFyZSBjb25uZWN0ZWQgdG8gZm9ybSB2ZWluc1xyXG5cclxuICAgIHRoaXMubm9kZXNJbmRleDsgICAgLy8ga2QtYnVzaCBzcGF0aWFsIGluZGV4IGZvciBhbGwgbm9kZXNcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzb2NpYXRlIGF1eGluIHNvdXJjZXMgd2l0aCBuZWFyYnkgdmVpbiBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggaXRzIGNsb3Nlc3QgdmVpbiBub2RlXHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKHNvdXJjZSwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSk7XHJcblxyXG4gICAgICAgICAgaWYoY2xvc2VzdE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzID0gW2Nsb3Nlc3ROb2RlXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgbGV0IG5laWdoYm9yaG9vZE5vZGVzID0gdGhpcy5nZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKTtcclxuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShzb3VyY2UpO1xyXG5cclxuICAgICAgICAgIC8vIEV4Y2x1ZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlIHNvdXJjZSdzIGtpbGwgem9uZSAodGhlc2Ugc2hvdWxkIHN0b3AgZ3Jvd2luZylcclxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhbm9kZXNJbktpbGxab25lLmluY2x1ZGVzKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IG5vZGVzVG9Hcm93O1xyXG5cclxuICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBub2Rlc1RvR3Jvdykge1xyXG4gICAgICAgICAgICBub2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZUlEKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3cgdGhlIG5ldHdvcmsgYnkgYWRkaW5nIG5ldyB2ZWluIG5vZGVzIG9udG8gYW55IG5vZGVzIGJlaW5nIGluZmx1ZW5jZWQgYnkgc291cmNlc1xyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gdGhpcy5nZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5vZGUuaW5mbHVlbmNlZEJ5Lm1hcChpZCA9PiB0aGlzLnNvdXJjZXNbaWRdKSk7XHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub2RlLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBhbnkgYXV4aW4gc291cmNlcyB0aGF0IGhhdmUgYmVlbiByZWFjaGVkIGJ5IHRoZWlyIGFzc29jaWF0ZWQgdmVpbiBub2Rlc1xyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2UgYXMgc29vbiBhcyBhbnkgdmVpbiBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5yZWFjaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCByZW1vdmUgdGhlIHNvdXJjZSBvbmx5IHdoZW4gYWxsIGFzc29jaWF0ZWQgdmVpbiBub2RlcyBoYXZlIHJlYWNoZWQgaXRcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgaWYoc291cmNlLmluZmx1ZW5jaW5nTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVidWlsZCBzcGF0aWFsIGluZGljZXNcclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIEVyYXNlIHRoZSBjYW52YXNcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIC8vIERyYXcgdmVpbiBub2Rlc1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93VmVpbnMpIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICAvLyBEcmF3IGF1eGluIHNvdXJjZXNcclxuICAgICAgc291cmNlLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIHNvdXJjZSBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzICYmIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKSB7XHJcbiAgICBsZXQgZmFpbDtcclxuXHJcbiAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpO1xyXG4gICAgbGV0IHJlbGF0aXZlTmVpZ2hib3JzID0gW107XHJcbiAgICBsZXQgc291cmNlVG9QMCwgc291cmNlVG9QMSwgcDBUb1AxO1xyXG5cclxuICAgIC8vIHAwIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2YgYXV4aW5Qb3MgaWZmXHJcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXHJcbiAgICAvLyBwMCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiB0byBwMVxyXG4gICAgZm9yKGxldCBwMCBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgIHNvdXJjZVRvUDAgPSBwMC5wb3NpdGlvbi5zdWJ0cmFjdChzb3VyY2UucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgIGlmKHAwID09PSBwMSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3VyY2VUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMS5sZW5ndGgoKSA+IHNvdXJjZVRvUDAubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDBUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QocDAucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2VUb1AwLmxlbmd0aCgpID4gcDBUb1AxLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWZhaWwpIHtcclxuICAgICAgICByZWxhdGl2ZU5laWdoYm9ycy5wdXNoKHAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueCxcclxuICAgICAgc291cmNlLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdE5vZGUoc291cmNlLCBuZWFyYnlOb2Rlcykge1xyXG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICBzb3VyY2UucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgcmVjb3JkID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieVNvdXJjZXMpIHtcclxuICAgIC8vIEFkZCB1cCBub3JtYWxpemVkIHZlY3RvcnMgcG9pbnRpbmcgdG8gZWFjaCBhdXhpbiBzb3VyY2VcclxuICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gbmV3IFZlYzIoMCwwKTtcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKFxyXG4gICAgICAgIHNvdXJjZS5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdXhpbiBzb3VyY2VzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgLy8gKENyZWRpdCB0byBEYXZpZGUgUHJhdGkgKGVkYXApIGZvciB0aGUgaWRlYSwgc2VlbiBpbiBvZnhTcGFjZUNvbG9uaXphdGlvbilcclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZURpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZFZlaW5Ob2RlKG5vZGUpIHtcclxuICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTcGF0aWFsSW5kaWNlcygpIHtcclxuICAgIHRoaXMubm9kZXNJbmRleCA9IG5ldyBLREJ1c2godGhpcy5ub2RlcywgcCA9PiBwLnBvc2l0aW9uLngsIHAgPT4gcC5wb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZlaW5zKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VmVpbnMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VmVpbnM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWluVGlwcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIG5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIW5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU291cmNlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUF0dHJhY3Rpb25ab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlS2lsbFpvbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcztcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXMgPSAhc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJbmZsdWVuY2VMaW5lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEF1eGluU291cmNlIGZyb20gJy4vQXV4aW5Tb3VyY2UnO1xyXG5pbXBvcnQgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlUGF0dGVybnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgc3RhdGljIGdldFJhbmRvbVNvdXJjZXMobnVtU291cmNlcywgY3R4LCBib3VuZHMgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBub2RlcyA9IFtdO1xyXG4gICAgbGV0IHgsIHk7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8bnVtU291cmNlczsgaSsrKSB7XHJcbiAgICAgIHggPSByYW5kb20od2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICB5ID0gcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgICBpZigoYm91bmRzICE9IHVuZGVmaW5lZCAmJiBib3VuZHMuY29udGFpbnMoeCx5KSkgfHwgYm91bmRzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG5vZGVzLnB1c2goXHJcbiAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKHgsIHkpLFxyXG4gICAgICAgICAgICBjdHhcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyaWRPZlNvdXJjZXMobnVtUm93cywgbnVtQ29sdW1ucywgY3R4LCBib3VuZHMgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBub2RlcyA9IFtdO1xyXG4gICAgbGV0IHgsIHk7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8PW51bVJvd3M7IGkrKykge1xyXG4gICAgICBmb3IobGV0IGo9MDsgajw9bnVtQ29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIG51bUNvbHVtbnMpICogaiArIHJhbmRvbSgtMTAsMTApO1xyXG4gICAgICAgIHkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gbnVtUm93cykgKiBpICsgcmFuZG9tKC0xMCwxMCk7XHJcblxyXG4gICAgICAgIGlmKChib3VuZHMgIT0gdW5kZWZpbmVkICYmIGJvdW5kcy5jb250YWlucyh4LHkpKSB8fCBib3VuZHMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBub2Rlcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgICAgbmV3IFZlYzIoeCx5KSxcclxuICAgICAgICAgICAgICBjdHhcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVpbk5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpbkNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIDEsXHJcbiAgICAgICAgICAxLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBNYXRoLlBJICogMlxyXG4gICAgICAgICk7ICAvLyBUT0RPOiB2YXJ5IGRvdCByYWRpdXMgYmFzZWQgb24gYWxnb3JpdGhtXHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpbkNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROZXh0Tm9kZShhdmVyYWdlU291cmNlRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmlzVGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWluTm9kZShcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzXHJcbiAgICApO1xyXG4gIH1cclxufSIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwiOyhmdW5jdGlvbiBpbmplY3QoY2xlYW4sIHByZWNpc2lvbiwgdW5kZWYpIHtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuXG4gIHZhciBkZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhICE9PSB1bmRlZjtcbiAgfTtcblxuICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjMikpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMih4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgeSA9IHhbMV07XG4gICAgICB4ID0geFswXTtcbiAgICB9IGVsc2UgaWYoJ29iamVjdCcgPT09IHR5cGVvZiB4ICYmIHgpIHtcbiAgICAgIHkgPSB4Lnk7XG4gICAgICB4ID0geC54O1xuICAgIH1cblxuICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCB8fCAwKTtcbiAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkgfHwgMCk7XG4gIH1cblxuICBWZWMyLnByb3RvdHlwZSA9IHtcbiAgICBjaGFuZ2UgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtmbl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGk9dGhpcy5vYnNlcnZlcnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldKHRoaXMsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaWdub3JlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMub2JzZXJ2ZXJzLCBsID0gby5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICBvW2xdID09PSBmbiAmJiBvLnNwbGljZShsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBzZXQgeCBhbmQgeVxuICAgIHNldDogZnVuY3Rpb24oeCwgeSwgbm90aWZ5KSB7XG4gICAgICBpZignbnVtYmVyJyAhPSB0eXBlb2YgeCkge1xuICAgICAgICBub3RpZnkgPSB5O1xuICAgICAgICB5ID0geC55O1xuICAgICAgICB4ID0geC54O1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnggPT09IHggJiYgdGhpcy55ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZyA9IG51bGw7XG4gICAgICBpZiAobm90aWZ5ICE9PSBmYWxzZSAmJiB0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgb3JpZyA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0gVmVjMi5jbGVhbih4KTtcbiAgICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSk7XG5cbiAgICAgIGlmKG5vdGlmeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG9yaWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyByZXNldCB4IGFuZCB5IHRvIHplcm9cbiAgICB6ZXJvIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoMCwgMCk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiBhIG5ldyB2ZWN0b3Igd2l0aCB0aGUgc2FtZSBjb21wb25lbnQgdmFsdWVzXG4gICAgLy8gYXMgdGhpcyBvbmVcbiAgICBjbG9uZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54LCB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBuZWdhdGUgdGhlIHZhbHVlcyBvZiB0aGlzIHZlY3RvclxuICAgIG5lZ2F0ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIHRoZSBpbmNvbWluZyBgdmVjMmAgdmVjdG9yIHRvIHRoaXMgdmVjdG9yXG4gICAgYWRkIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ICs9IHRoaXMueDtcbiAgICAgIHkgKz0gdGhpcy55O1xuXG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaW5jb21pbmcgYHZlYzJgIGZyb20gdGhpcyB2ZWN0b3JcbiAgICBzdWJ0cmFjdCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggPSB0aGlzLnggLSB4O1xuICAgICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgaW5jb21pbmcgYHZlYzJgXG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgeCAqPSB0aGlzLng7XG4gICAgICB5ICo9IHRoaXMueTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJvdGF0ZSB0aGlzIHZlY3Rvci4gQWNjZXB0cyBhIGBSb3RhdGlvbmAgb3IgYW5nbGUgaW4gcmFkaWFucy5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgYSB0cnV0aHkgYGludmVyc2VgIHdpbGwgY2F1c2UgdGhlIHJvdGF0aW9uIHRvXG4gICAgLy8gYmUgcmV2ZXJzZWQuXG4gICAgLy9cbiAgICAvLyBJZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHksIGEgbmV3XG4gICAgLy8gYFZlYzJgIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSB2YWx1ZXMgcmVzdWx0aW5nIGZyb21cbiAgICAvLyB0aGUgcm90YXRpb24uIE90aGVyd2lzZSB0aGUgcm90YXRpb24gd2lsbCBiZSBhcHBsaWVkXG4gICAgLy8gdG8gdGhpcyB2ZWN0b3IgZGlyZWN0bHksIGFuZCB0aGlzIHZlY3RvciB3aWxsIGJlIHJldHVybmVkLlxuICAgIHJvdGF0ZSA6IGZ1bmN0aW9uKHIsIGludmVyc2UsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB4ID0gdGhpcy54LFxuICAgICAgeSA9IHRoaXMueSxcbiAgICAgIGNvcyA9IE1hdGguY29zKHIpLFxuICAgICAgc2luID0gTWF0aC5zaW4ociksXG4gICAgICByeCwgcnk7XG5cbiAgICAgIGludmVyc2UgPSAoaW52ZXJzZSkgPyAtMSA6IDE7XG5cbiAgICAgIHJ4ID0gY29zICogeCAtIChpbnZlcnNlICogc2luKSAqIHk7XG4gICAgICByeSA9IChpbnZlcnNlICogc2luKSAqIHggKyBjb3MgKiB5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHJ4LCByeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocngsIHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICBsZW5ndGggOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggc3F1YXJlZC4gRm9yIHBlcmZvcm1hbmNlLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIGBWZWMyI2xlbmd0aGAgKGlmIHBvc3NpYmxlKS5cbiAgICBsZW5ndGhTcXVhcmVkIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiB4KngreSp5O1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlbiB0aGlzIGBWZWMyYCBhbmQgdGhlIGluY29taW5nIHZlYzIgdmVjdG9yXG4gICAgLy8gYW5kIHJldHVybiBhIHNjYWxhclxuICAgIGRpc3RhbmNlIDogZnVuY3Rpb24odmVjMikge1xuICAgICAgdmFyIHggPSB0aGlzLnggLSB2ZWMyLng7XG4gICAgICB2YXIgeSA9IHRoaXMueSAtIHZlYzIueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gQXJyYXkgb2YgVmVjMiwgZmluZCBjbG9zZXN0IHRvIHRoaXMgVmVjMi5cbiAgICBuZWFyZXN0IDogZnVuY3Rpb24ob3RoZXJzKSB7XG4gICAgICB2YXJcbiAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgbmVhcmVzdCA9IG51bGwsXG4gICAgICBjdXJyZW50RGlzdGFuY2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvdGhlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY3VycmVudERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShvdGhlcnNbaV0pO1xuICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDw9IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICAgIG5lYXJlc3QgPSBvdGhlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5lYXJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgdGhpcyB2ZWN0b3IgaW50byBhIHVuaXQgdmVjdG9yLlxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aC5cbiAgICBub3JtYWxpemUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAvLyBDb2xsZWN0IGEgcmF0aW8gdG8gc2hyaW5rIHRoZSB4IGFuZCB5IGNvb3Jkc1xuICAgICAgdmFyIGludmVydGVkTGVuZ3RoID0gKGxlbmd0aCA8IE51bWJlci5NSU5fVkFMVUUpID8gMCA6IDEvbGVuZ3RoO1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb29yZHMgdG8gYmUgZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgICAgLy8gYnV0IHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byAxLjBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYW5vdGhlciBgVmVjMmAncyBjb21wb25lbnRzIG1hdGNoIHRoaXMgb25lJ3NcbiAgICAvLyBhbHNvIGFjY2VwdHMgMiBzY2FsYXJzXG4gICAgZXF1YWwgOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB3ID0gdlsxXTtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gdi55O1xuICAgICAgICAgIHYgPSB2Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChWZWMyLmNsZWFuKHYpID09PSB0aGlzLnggJiYgVmVjMi5jbGVhbih3KSA9PT0gdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCB0aGF0IGNvbnRhaW5zIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZlxuICAgIC8vIGVhY2ggb2YgdGhpcyB2ZWN0b3IncyBwYXJ0c1xuICAgIGFicyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIHggPSBNYXRoLmFicyh0aGlzLngpLCB5ID0gTWF0aC5hYnModGhpcy55KTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBzbWFsbGVzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtaW4gOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPCB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPCB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgbGFyZ2VzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtYXggOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPiB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPiB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENsYW1wIHZhbHVlcyBpbnRvIGEgcmFuZ2UuXG4gICAgLy8gSWYgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgYXJlIGxvd2VyIHRoYW4gdGhlIGBsb3dgJ3NcbiAgICAvLyB2YWx1ZXMsIHRoZW4gcmFpc2UgdGhlbS4gIElmIHRoZXkgYXJlIGhpZ2hlciB0aGFuXG4gICAgLy8gYGhpZ2hgJ3MgdGhlbiBsb3dlciB0aGVtLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyByZXR1cm5OZXcgYXMgdHJ1ZSB3aWxsIGNhdXNlIGEgbmV3IFZlYzIgdG8gYmVcbiAgICAvLyByZXR1cm5lZC4gIE90aGVyd2lzZSwgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgd2lsbCBiZSBjbGFtcGVkXG4gICAgY2xhbXAgOiBmdW5jdGlvbihsb3csIGhpZ2gsIHJldHVybk5ldykge1xuICAgICAgdmFyIHJldCA9IHRoaXMubWluKGhpZ2gsIHRydWUpLm1heChsb3cpO1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJldC54LCByZXQueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm0gbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgIC8vIGFtb3VudCBpcyBhIGRlY2ltYWwgYmV0d2VlbiAwIGFuZCAxXG4gICAgbGVycCA6IGZ1bmN0aW9uKHZlYywgYW1vdW50LCByZXR1cm5OZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh2ZWMuc3VidHJhY3QodGhpcywgdHJ1ZSkubXVsdGlwbHkoYW1vdW50KSwgcmV0dXJuTmV3KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBza2V3IHZlY3RvciBzdWNoIHRoYXQgZG90KHNrZXdfdmVjLCBvdGhlcikgPT0gY3Jvc3ModmVjLCBvdGhlcilcbiAgICBza2V3IDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueSwgdGhpcy54KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueSwgdGhpcy54KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIGRvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueCArIGIueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcGVycGVuZGljdWxhciBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIHBlcnBEb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnkgLSB0aGlzLnkgKiBiLngpO1xuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlYzJzXG4gICAgYW5nbGVUbyA6IGZ1bmN0aW9uKHZlYykge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5wZXJwRG90KHZlYyksIHRoaXMuZG90KHZlYykpO1xuICAgIH0sXG5cbiAgICAvLyBEaXZpZGUgdGhpcyB2ZWN0b3IncyBjb21wb25lbnRzIGJ5IGEgc2NhbGFyXG4gICAgZGl2aWRlIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXZpc2lvbiBieSB6ZXJvJylcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICB9LFxuXG4gICAgaXNQb2ludE9uTGluZSA6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoc3RhcnQueSAtIHRoaXMueSkgKiAoc3RhcnQueCAtIGVuZC54KSA9PT1cbiAgICAgICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC54IC0gdGhpcy54KTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGFycmF5WzBdLCBhcnJheVsxXSk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICcoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gICAgfSxcbiAgICBjb25zdHJ1Y3RvciA6IFZlYzJcbiAgfTtcblxuICBWZWMyLmZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoY3RvciB8fCBWZWMyKShhcnJheVswXSwgYXJyYXlbMV0pO1xuICB9O1xuXG4gIC8vIEZsb2F0aW5nIHBvaW50IHN0YWJpbGl0eVxuICBWZWMyLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA4O1xuICB2YXIgcCA9IE1hdGgucG93KDEwLCBWZWMyLnByZWNpc2lvbik7XG5cbiAgVmVjMi5jbGVhbiA9IGNsZWFuIHx8IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUodmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0eSBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmKE1hdGgucm91bmQodmFsKSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIHApL3A7XG4gIH07XG5cbiAgVmVjMi5pbmplY3QgPSBpbmplY3Q7XG5cbiAgaWYoIWNsZWFuKSB7XG4gICAgVmVjMi5mYXN0ID0gaW5qZWN0KGZ1bmN0aW9uIChrKSB7IHJldHVybiBrOyB9KTtcblxuICAgIC8vIEV4cG9zZSwgYnV0IGFsc28gYWxsb3cgY3JlYXRpbmcgYSBmcmVzaCBWZWMyIHN1YmNsYXNzLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gVmVjMjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LlZlYzIgPSB3aW5kb3cuVmVjMiB8fCBWZWMyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVmVjMjtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9