
---
### Optimal 1

![[Pasted image 20250401101448.png|444]]


```cpp
int findMaxConsecutiveOnes(vector < int > & nums) {
      int cnt = 0;
      int maxi = 0;
      for (int i = 0; i < nums.size(); i++) {
        if (nums[i] == 1) {
          cnt++;
        } else {
          cnt = 0;
        }

        maxi = max(maxi, cnt);
      }
      return maxi;
    }
};
```


>**Time Complexity: O(N) since the solution involves only a single pass.**

>**Space Complexity: O(1) because no extra space is used.**


