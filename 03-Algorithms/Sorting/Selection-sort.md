``` python
n = A.length
for i = 1 to n - 1
    minIndex = i
    for j = i + 1 to n   // loop to find least element index to the right of A[i]  
        if A[j] < A[minIndex]
            minIndex = j    
    swap(A[i], A[minIndex])
```























Parent topics : [[Sorting Algorithms]]