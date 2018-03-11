var vector = {
  _x: 0,
  _y: 0,

  create: function(x, y) {
    var instance = Object.create(this);
    instance.setX(x);
    instance.setY(y);
    return instance;
  },

  setX: function(value) {
    this._x = value;
  },

  getX: function() {
    return this._x;
  },

  setY: function(value) {
    this._y = value;
  },

  getY: function() {
    return this._y;
  },

  setAngle: function(angle) {
    var length = this.getLength();
    this._x = length * Math.cos(angle);
    this._y = length * Math.sin(angle);
  },

  getAngle: function() {
    return Math.atan2(this._y, this._x);
  },

  getLength: function() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  },

  setLength: function(length) {
    var angle = this.getAngle();
    this._x = length * Math.cos(angle);
    this._y = length * Math.sin(angle);
  },

  add: function(v2) {
    return this.create(this._x + v2.getX(), this._y + v2.getY());
  },

  subtract: function(v2) {
    return this.create(this._x - v2.getX(), this._y - v2.getY());
  },

  multiply: function(v2) {
    return this.create(this.x * v2.getX(), this.y * v2.getY());
  },

  divide: function(v2) {
    return this.create(this.x / v2.getX(), this.y / v2.getY());
  },

  addTo: function(v2) {
    this._x += v2.getX();
    this._y += v2.getY();
  },

  subtractFrom: function(v2) {
    this._x = -v2.getX();
    this._y = -v2.getY();
  },

  multiplyBy: function(v2) {
    this._x *= v2.getX();
    this._y *= v2.getY();
  },

  divideBy: function(v2) {
    this._x /= v2.getX();
    this._y /= v2.getY();
  }
}
