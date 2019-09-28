describe("index.js", () => {
  

  describe("the array of functions", () => {
    it("has variables for each activity", () => {
      expect(wakeDog).to.exist
      expect(leashDog).to.exist
      expect(walkToPark).to.exist
      expect(throwFrisbee).to.exist
      expect(walkHome).to.exist
      expect(unleashDog).to.exist
    })
    it("has an array called 'routine' that contains each activity", () => {
      expect(routine).to.be.a('array');
      expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
    })
  })

  describe("the function that runs the array o' functions", () => {
    it("calls into the independent functions", () => {
      expect(routine).to.be.a('array');
      expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
      expect(throwFrisbee).to.exist

      const executedMessages = exerciseDog("Esther", "Dalmation")

      const successMessages = [ 'Wake Esther the Dalmation',
        'Leash Esther the Dalmation',
        'Walk to the park with Esther the Dalmation',
        'Throw the frisbee for Esther the Dalmation',
        'Walk home with Esther the Dalmation',
        'Unleash Esther the Dalmation' ]

      result = successMessages.every(msg => executedMessages.indexOf(msg) >= 0);
      expect(result, "exerciseDog should run all the functions in the 'routine' array").true
    })
  })
});
