
---
### Brute

![[Pasted image 20250331114100.png|400]]


![[Pasted image 20250331114025.png|400]]


```cpp
vector<int> intersectionOfArrays(vector<int>A, vector<int>B){
    
  vector <int> ans;
  
  // to maintain visited
  vector <int> visited(B.size(), 0);  
  int i = 0, j = 0;
  
  for (i = 0; i < A.size(); i++) {
      
    for (j = 0; j < B.size(); j++) {

      if (A[i] == B[j] && visited[j] == 0) { 
      
        //if element matches and has not been matched with any other before
        ans.push_back(B[j]);
        visited[j] = 1;

        break;
      } 
      
      else if (B[j] > A[i]) break; 
      //because array is sorted , element will not be beyond this
    }
  }
  
  return ans;
    
}
```

## Complexity Analysis Template

|Aspect|Analysis|
|---|---|
|**Time Complexity**|O(n×m)O(n×m), where nn is the size of array AA and mm is the size of array BB. The nested loops iterate through both arrays.|
|**Space Complexity**|O(m)O(m), due to the additional `visited` array used to track elements in BB.|
|**Best Case**|O(n)O(n), when all elements of AA are smaller than the smallest element of BB (no inner loop execution).|
|**Worst Case**|O(n×m)O(n×m), when every element in AA matches an element in BB.|

## Summary

- ✅ Uses nested loops to compare each element of AA with BB.
- ✅ Efficient for small arrays but less optimal for larger datasets due to O(n×m)O(n×m) time complexity.
- ✅ Works for sorted arrays only (as indicated by the early break condition).
- ✅ Handles duplicates using a `visited` array to avoid repeated matches.

---
### Optimal 1 - Two pointer technique


```cpp
vector<int> intersectionOfArrays(vector<int>& A, vector<int>& B) {
    vector<int> ans; // Resultant array to store the intersection
    int i = 0, j = 0; // Initialize two pointers for both arrays

    // Traverse both arrays using two pointers
    while (i < A.size() && j < B.size()) {
        if (A[i] < B[j]) {
            i++; // Move pointer i forward if A[i] is smaller
        } else if (B[j] < A[i]) {
            j++; // Move pointer j forward if B[j] is smaller
        } else {
            ans.push_back(A[i]); // Add the common element to the result
            i++; 
            j++; // Move both pointers forward
        }
    }
    return ans;
}
```

![[Pasted image 20250331133223.png|500]]

___
Parent: [[Arrays]]

Related: [[Two-pointer]]


