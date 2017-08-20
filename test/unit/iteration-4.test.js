import DistrictRepository from "../../src/DistrictRepository.js";
import kinderData from "../../data/kindergartners_in_full_day_program.js";

describe("DistrictRepository iteration 0", () => {
  const district = new DistrictRepository(kinderData);

  test("findAverage for ACADEMY 20", () => {
    expect(district.findAverage("ACADEMY 20")).toBe(0.407);
  });

  test("compareDistrictAverages ACADEMY 20 against YUMA SCHOOL DISTRICT 1", () => {
    const result = {
      "ACADEMY 20": 0.407,
      "YUMA SCHOOL DISTRICT 1": 0.909,
      compared: 0.448
    };
    expect(
      district.compareDistrictAverages(
        result["ACADEMY 20"],
        result["YUMA SCHOOL DISTRICT 1"]
      )
    ).toEqual(result.compared);
  });

  test("compareDistrictAverages should take two average as arguments and return a ratio", () => {
    const Academy20 = 0.407;
    const YumaSchoolDistrict1 = 0.909;
    expect(
      district.compareDistrictAverages(Academy20, YumaSchoolDistrict1)
    ).toEqual(0.448);
  });

  test.skip("compareDistrictAverages is case insensitive", () => {
    const result = {
      "ACADEMY 20": 0.407,
      "YUMA SCHOOL DISTRICT 1": 0.909,
      compared: 0.448
    };
    expect(
      district.compareDistrictAverages(
        result["ACADeMY 20"],
        result["YUMA ScHOoL DiSTRICT 1"]
      )
    ).toEqual(result.compared);
  });

  test.skip("compareDistrictAverages ACADEMY 20 against Colorado", () => {
    const result = { "ACADEMY 20": 0.407, COLORADO: 0.53, compared: 0.768 };
    expect(
      district.compareDistrictAverages(result["ACADEMY 20"], result["Colorado"])
    ).toEqual(result.compared);
  });
});
