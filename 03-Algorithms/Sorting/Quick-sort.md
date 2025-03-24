![[Pasted image 20250322111513.png]]

- Above is simple QS implementation
- Below uses a technique called Tail Call Elimination (see Tail Recursion) to reduce stack usage by replacing few with iterative calls

```cpp
int partition(vector<int>& arr, int low, int high) {
        int pivot = arr[high]; // Using last element as pivot
        int i = low - 1; 

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                swap(arr[++i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[high]);
        return i + 1; 
    }

    void quickSort(vector<int>& arr, int low, int high) {
        while (low < high) { // Tail Recursion Optimization
            int pivotIndex = partition(arr, low, high);
            
            // Prioritize smaller subarray first (reduces recursion depth)
            if (pivotIndex - low < high - pivotIndex) {
                quickSort(arr, low, pivotIndex - 1);
                low = pivotIndex + 1; // Move to the larger half
            } else {
                quickSort(arr, pivotIndex + 1, high);
                high = pivotIndex - 1; // Move to the smaller half
            }
        }
    }
```

---

![[Pasted image 20250322115939.png|500]]


