```cpp
    // CPP to sort the array using bubble sort algorithm.
    void bubbleSort(vector<int>& arr) {
        // Your code here
        int n = arr.size();
        
        for (int i = n-1; i>=0 ;i--){
            
            bool isSwapped = false;
            
            for(int j = 0; j<i; j++){
                if (arr[j] > arr[j+1]){
                    swap(arr[j], arr[j+1]);
                    isSwapped = true;
                }
            }
            
            if(!isSwapped) break;
        }
    }
```

![[Pasted image 20250319101220.png|500]]



Parent : [[Sorting Algorithms]]



