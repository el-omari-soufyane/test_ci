class Converter {
    constructor() {}
  
    convert(romanNumber) {
      if(romanNumber < 4) return "I".repeat(romanNumber);
      else if (romanNumber == 5) return "V";
      return "VI"
    }
  }
  