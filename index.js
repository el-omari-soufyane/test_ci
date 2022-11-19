class Converter {
    constructor() {}
  
    convert(romanNumber) {
      return romanNumber < 4 ? "I".repeat(romanNumber) : "IV";
    }
  }
  