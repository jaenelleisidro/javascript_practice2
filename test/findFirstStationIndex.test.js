const findFirstStationIndex = require('../src/findFirstStationIndex');

describe('find station', () => {


    describe('there is only one correct station',()=>{
        test('correct station is at 1', () => {
            let strArr=['4', '5:2', '2:3', '3:4', '4:5'];
            let expectedStationIndex=1
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
        test('correct station is at 2', () => {
            let strArr=['4', '1:2', '5:3', '3:4', '4:5'];
            let expectedStationIndex=2
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
        test('correct station is at 3', () => {
            let strArr=['4', '1:2', '2:3', '5:4', '4:5'];
            let expectedStationIndex=3
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
        test('correct station is at index=4', () => {
            let strArr=['4', '1:2', '2:3', '3:4', '5:5'];
            let expectedStationIndex=4
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
    });


    describe('there is multiple correct station',()=>{
        test('correct station is 1 and 2', () => {
            let strArr=['4', '5:2', '200:3', '3:4', '4:5'];
            let expectedStationIndex=1
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
        test('correct station is 2 and 3', () => {
            let strArr=['4', '1:2', '5:3', '300:4', '4:5'];
            let expectedStationIndex=2
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
        test('correct station is 3 and 4', () => {
            let strArr=['4', '1:2', '2:3', '5:4', '400:5'];
            let expectedStationIndex=3
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
        test('correct station is 1 and 5', () => {
            let strArr=['4', '100:2', '2:3', '3:4', '5:5'];
            let expectedStationIndex=1
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });
    });

    describe('special cases',()=>{
        test('no correct station', () => {
            let strArr=['4', '1:4', '2:3', '3:4', '4:5'];
            let expectedStationIndex="impossible";
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });

        test('there is only 1 station and correct station is 1', () => {
            let strArr=['1', '100:2'];
            let expectedStationIndex=1
            expect(findFirstStationIndex(strArr)).toBe(expectedStationIndex);
        });        
        test('2 station and correct station is 1 but station 2 data was missing', () => {
            let strArr=['2', '100:2'];
            expect(findFirstStationIndex(strArr)).toBe("impossible");
        });        
        test('parameter is null', () => {
            expect(()=>{
                findFirstStationIndex(null);
            }).toThrow(Error("parameter must be a string"));
        });
        test('parameter is empty array', () => {
            expect(findFirstStationIndex([])).toBe("impossible");
        });
    });
});
  
    