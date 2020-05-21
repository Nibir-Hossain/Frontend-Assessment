#include<bits/stdc++.h>
using namespace std;

#define fr(i,a)  for(i=0;i<a;i++)
#define cln(x)   memset(x,0,sizeof(x))
#define clr(x)   memset(x,-1,sizeof(x))
#define dbg(x)   cout<<"#"<<x<<endl;
string num1,num2;
main()
{
    int i,j;
    while(cin>>num1>>num2)
    {
        string sum="";
        reverse(num1.begin(),num1.end());
        reverse(num2.begin(),num2.end());
        int l1=num1.size(),l2=num2.size(),ext=0;
        for(i=0,j=0;i<l1&&j<l2;i++,j++)
        {
            int d1=num1[i]-'0';
            int d2=num2[j]-'0';
            int res=d1+d2+ext;
            ext=res/10;
            if(res>9) res-=10;
            dbg(res);
            sum+=(res+'0');
        }
        for(;i<l1;i++)
        {

            int d=num1[i]-'0';
            int res=d+ext;
            ext=res/10;
            if(res>9) res-=10;
            sum+=(res+'0');
        }
        for(;j<l2;j++)
        {

            int d=num2[j]-'0';
            int res=d+ext;
            ext=res/10;
            if(res>9) res-=10;
            sum+=(res+'0');
        }
        if(ext) sum+=(ext+'0');
        reverse(sum.begin(),sum.end());
        cout<<sum<<endl;
    }
    return 0;
}
