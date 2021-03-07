function ballMovement(ball, ax, ay, inputSensitivity, cursors) {
  //assigning force using the accelerometer
  ball.body.force.x = deviceMultiplier * ax;
  ball.body.force.y = -1 * deviceMultiplier * ay;

    if (cursors.left.isDown) {
      ball.body.rotateLeft(inputSensitivity / 3);
    } else if (cursors.right.isDown) {
      ball.body.rotateRight(inputSensitivity / 3);
    } else {
      ball.body.setZeroRotation();
    }

    if (cursors.up.isDown) {
      ball.body.thrust(inputSensitivity * 2);
    } else if (cursors.down.isDown) {
      ball.body.reverse(inputSensitivity * 2);
    }

}