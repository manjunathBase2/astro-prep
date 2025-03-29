
### **Brute approach**:
- insert the element one by one into a set\<int\>s
- then copy over the set ele to the original array one by one

### **Optimal**:
#### **Understanding the Approach**

1. **Two-pointer technique**:
    
    - **`i`** (slow pointer) tracks the position of the last unique element.
        
    - **`j`** (fast pointer) iterates through the array to find the next unique element.
        
2. **If `nums[j] != nums[i]`, then:**
    
    - We increment `i` to make space for a new unique element.
        
    - Assign `nums[j]` to `nums[i]`, compacting unique elements at the front.
        
3. **Finally, return `i + 1`**, which represents the number of unique elements.


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

