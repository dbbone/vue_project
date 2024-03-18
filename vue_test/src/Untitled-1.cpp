#include<bits/stdc++.h>
using namespace std;

bool cmp(int &x,int &y){
    return x<y;
}

void solve(){
   int n;
   cin>>n;
   vector<int> arr(n);
   for(int i=0;i<n;i++){
     cin>>arr[i];
   }
   sort(arr.begin(),arr.end(),cmp);
   for(int j=0;j<n;j++){
    cout<<arr[j];
   }

   cout<<endl;

}

int main(){
    solve();
}