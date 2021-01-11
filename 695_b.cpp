#include<iostream>
#include<vector>
using namespace std;


void solve(){
	int n,count=0;
	cin>>n;

	vector< int > inp(n);
	vector< int > v(n);

	for( int i = 0; i < n; i++ ) cin>>inp[i];

	for( int i = 1; i < n-1; i++ ){
		if( inp[i-1] > inp[ i ] && inp[i+1] > inp[ i ] ){
			v[i] = -1;
			count++;
		}
		else if( inp[i-1] < inp[ i ] && inp[i+1] < inp[ i ] ){
			count++;
			v[ i ] = 1;
		}
		else{
			v[ i ] = 0;
		}
	}

	if( count == 0 ) cout<<0<<endl;
	else{
		int sub=1;

		for( int i = 1; i < n-1; i++ ){
			if( v[i] != 0  && v[i+1] != 0 ){
				if( i+2 < n-1  && v[i+2] != 0 ){
					sub = 3; break;
				}
				else{
					sub = 2;
				}
			}
		}

		cout<<count-sub<<endl;
	}


	
}

int main(){
	int test;
	cin>>test;

	while( test-- )
		solve();

	return 0;
}