export class Climate {
  temperature;
  humidity;
  pressure;
  feelsLike;
  comfortStatus;

  constructor(value) {
    Object.assign(this, value);
  }
}
