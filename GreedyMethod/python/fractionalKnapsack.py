class Solution:
    def knapsack(self, W, val, wt):
        
        n = len(val)                                 
        
        items = [[val[i], wt[i]] for i in range(n)]     
        
        items.sort(key=lambda x: x[0]/x[1], reverse=True)     
        
        res = 0.0                                   
        currentCapacity = W                        
        
        for i in range(len(items)):                 
            if currentCapacity == 0:                
                break
            
            if items[i][1] <= currentCapacity:     
                res += items[i][0]                  
                currentCapacity -= items[i][1]  
            else:
                res += (items[i][0]/items[i][1]) * currentCapacity     
                break
             
        return res                                  


class Solution:
    def knapsack(self, W, val, wt):
        n = len(val)

        # Create (value, weight) pairs
        items = [(val[i], wt[i]) for i in range(n)]

        # Sort items by value/weight ratio (descending)
        items.sort(key=lambda x: x[0] / x[1], reverse=True)

        total_value = 0.0
        current_capacity = W

        for value, weight in items:
            if current_capacity == 0:
                break

            if weight <= current_capacity:
                # Take full item
                total_value += value
                current_capacity -= weight
            else:
                # Take fractional part
                total_value += (value / weight) * current_capacity
                break

        return total_value
