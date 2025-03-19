``` python
n = A.length
for i = 1 to n - 1
    minIndex = i
    for j = i + 1 to n   // loop to find least element index to the right of A[i]  
        if A[j] < A[minIndex]
            minIndex = j    
    swap(A[i], A[minIndex])
```

```cpp
    // CPP code to perform selection sort on the given array.
    void selectionSort(vector<int> &arr) {
        // size of the array
        int n = arr.size();

        for(int i = 0; i < n ; i++){
            int min_index = i;
            for (int j = i + 1; j < n; j++){ // to find min in the array left
                if (arr[j]<arr[min_index]){
                    min_index = j;
                }
            }
            
            if (min_index!=i){    // minor check to avoid swapping same ele
                swap(arr[min_index], arr[i]);
            }
        }
    }
```



---

| Complexity           | Value                                                        |
| -------------------- | ------------------------------------------------------------ |
| **Best Case**        | $O(n^2)$                                                     |
| **Average Case**     | $O(n^2)$                                                     |
| **Worst Case**       | $O(n^2)$                                                     |
| **Space Complexity** | $O(n)$ - auxiliary                                           |
| **Stability**        | No - swapping                                                |
| **Method**           | Swapping the min ele from the remaining subarray on the left |

#### Additional
- **Efficient for small arrays**
- **Better than Bubble Sort in terms of swaps** (only O(n)O(n)O(n) swaps vs O(n2)O(n^2)O(n2) in Bubble Sort)
- **Poor for large datasets** compared to Merge Sort or QuickSort.



















Parent topics : [[Sorting Algorithms]]