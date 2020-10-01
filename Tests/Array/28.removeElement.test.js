
import removeElement from "../../Array/28.removeElement";
test('test01', () => {
    var nums = [3,2,2,3]
    var value = 3
    var expected = 2
    var actual = removeElement(nums,value)
    expect(actual).toBe(expected)
});

test('test02', () => {
    var nums = [0,1,2,2,3,0,4,2]
    var value = 2
    var expected = 5
    var actual = removeElement(nums,value)
    expect(actual).toBe(expected)
});