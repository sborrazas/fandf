import React, { Component } from "react";
import paper, { Path, Point, Size } from "paper/dist/paper-full.js";
import styles from "./Splash.less";
import { connectStyles } from "utils/styles.js";

/**
 * Extracted from Paper.js examples.
 * http://paperjs.org/examples/future-splash/
 */

const values = {
	friction: 0.8,
	timeStep: 0.01,
	amount: 10,
	mass: 20,
};
values.invMass = 1 / values.mass;

class Spring {
  constructor(a, b, strength, restLength) {
    this.a = a;
    this.b = b;
    this.restLength = restLength || 80;
    this.strength = strength ? strength : 0.55;
    this.mamb = values.invMass * values.invMass;
  }
  update() {
    var delta = this.b.subtract(this.a);
    var dist = delta.length;
    var normDistStrength = (dist - this.restLength) /
        (dist * this.mamb) * this.strength;
    delta.y = delta.y * normDistStrength * values.invMass * 0.04;
    if (!this.a.fixed)
      this.a.y += delta.y;
    if (!this.b.fixed)
      this.b.y -= delta.y;
  }
}

class Splash extends Component {
  componentDidMount() {
    const { canvas, container } = this.refs;
    canvas.width = container.offsetWidth + container.offsetLeft * 2;

    this._view = paper.setup(this.refs.canvas).project.view;
 	  this._size = this._view.size.multiply([2, 1]);
 	  this._path = this._createPath(0.1);

    this._view.onMouseMove = this._mouseMove.bind(this);
    this._view.onFrame = this._frame.bind(this);
  }
  render() {
    const { classes, inverted } = this.props;

    return (
      <div ref="container" className={classes.splash({ inverted: inverted })}>
        <canvas
          className={classes.canvas()}
          height="200"
          ref="canvas" />
      </div>
    );
  }
  _createPath(strength) {
    const { inverted } = this.props;
    const fillColor = inverted ? "rgb(31, 31, 31)" : "rgb(255, 255, 255)";
    const springs = [];
    const path = new Path({
      fillColor: fillColor,
    });
    const size = this._size;

    this._springs = springs;

    for (var i = 0; i <= values.amount; i++) {
      var positionSize = new Size(1, 1);
      var isFixed = i < 2 || i > values.amount - 2;
      if (!isFixed) {
        positionSize = new Size(1 + (i - values.amount / 2) / 40, 1);
      }
      var segment = path.add(
        (new Point(i / values.amount, 0.5)).multiply(size).multiply(positionSize)
      );
      var point = segment.point;
      if (i == 0 || i == values.amount)
        point.y += size.height;
      point.px = point.x;
      point.py = point.y;
      // The first two and last two points are fixed:
      point.fixed = i < 2 || i > values.amount - 2;
      if (i > 0) {
        springs.push(
          new Spring(segment.previous.point, point, strength)
        );
      }
    }
    path.position.x -= size.width / 4;
    return path;
  }
  _mouseMove(event) {
    const size = this._size;
    var location = this._path.getNearestLocation(event.point);
    var segment = location.segment;
    var point = segment.point;

    if (!point.fixed && location.distance < size.height / 4) {
      var y = event.point.y;
      point.y += (y - point.y) / 6;
      if (segment.previous && !segment.previous.fixed) {
        var previous = segment.previous.point;
        previous.y += (y - previous.y) / 24;
      }
      if (segment.next && !segment.next.fixed) {
        var next = segment.next.point;
        next.y += (y - next.y) / 24;
      }
    }
  }
  _frame() {
    var path = this._path;
    var springs = this._springs;
    var force = 1 - values.friction * values.timeStep * values.timeStep;
    for (var i = 0, l = path.segments.length; i < l; i++) {
      var point = path.segments[i].point;
      var dy = (point.y - point.py) * force;
      point.py = point.y;
      point.y = Math.max(point.y + dy, 0);
    }

    for (var j = 0, l = springs.length; j < l; j++) {
      springs[j].update();
    }
    path.smooth({ type: "asymmetric" });
  }
}

Splash = connectStyles(Splash, styles);

export default Splash;
