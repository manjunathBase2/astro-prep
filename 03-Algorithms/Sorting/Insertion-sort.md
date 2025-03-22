![[Pasted image 20250306120111.png|600]]

- Similar to sorting a hand of cards (increasing order)
- j introduces the next element, while i updates the sorted subarray to be considered
- `while i>0 and A[i]>key` checks and shifts the elements to right, if sort order is invalidated

	- for loop over all elements --> `key=A[j]` 
	- while loop to check criteria and shift the elements is required
	- `A[i+1]` assignment at last for every iteration

```cpp
void insertionSort(vector<int>& arr) {
    int n = arr.size();
    
    for(int i = 1; i < n; i++) {  // Start from 1- first ele is already "sorted"
        int j = i - 1;
        int curr = arr[i];  // Store the current element
        
        while (j >= 0 && arr[j] > curr) {  // Compare with the stored value
            arr[j + 1] = arr[j];  // Shift elements to the right
            j--;
        }
        
        arr[j + 1] = curr;  // Place current element at correct position
    }
}
```

---
![[Pasted image 20250319102927.png|500]]



Parent topics : [[Sorting Algorithms]]