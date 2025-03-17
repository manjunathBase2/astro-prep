![[Pasted image 20250317092556.png|400]]

![[Pasted image 20250317092530.png|400]]  


```cpp
#include <iostream>
using namespace std;

// Merge function to merge two sorted subarrays
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
	
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    
	// without sentinel (infinity) usage
    while (i < n1) arr[k++] = L[i++];  // copyover remaining elements
    while (j < n2) arr[k++] = R[j++];
}

// Merge Sort function
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

// Main function
int main() {
    int arr[] = {5, 3, 8, 4, 2, 7, 1, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    
    return 0;
}
```


---

| Complexity           | Value            |
| -------------------- | ---------------- |
| **Best Case**        | O(n logn)        |
| **Average Case**     | O(n logn)        |
| **Worst Case**       | O(n logn)        |
| **Space Complexity** | O(n)             |
| **Stability**        | Stable           |
| **Method**           | Divide & Conquer |

#### Additional
- Merge Sort is highly efficient for large datasets and guarantees O(n log n) time complexity in all cases.
- It is a stable sort, meaning that it maintains the relative order of equal elements.
- The use of auxiliary arrays (and optionally sentinel values) simplifies the merge process but does require additional space.

