
**Brute approach**:
- insert the element one by one into a set\<int\>s
- then copy over the set ele to the original array one by one

**Optimal**:

```cpp
int removeDuplicates(vector<int>& nums) {
	int i = 0; // tracks last element
	
	for (int j=1;j<nums.size();j++){

		if(nums[j]!=nums[i])    //check for the next diff element

			nums[++i]=nums[j];  // 

	}
	
	return i+1;
}
```

![[Pasted image 20250324131216.png|500]]


--- 
Related: [[Arrays]], [[Two-pointer]]

