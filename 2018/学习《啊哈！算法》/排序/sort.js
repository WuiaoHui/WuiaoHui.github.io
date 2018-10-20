//将数组的数从大到小进行排序：

//如果要获取html节点内容可以通过document.getElementId()等方法来获取节点，然后通过节点的innerHTML或者表单的value来获取数据。
// 这里我就直接给出数据了。

// 首先是桶排序
let inPut = [0,4,60,40,101,102];
let book=[];
for(let i=0;i<=200;i++)
{
    book[i]=0;
}
for(let i=0;i<inPut.length;i++)
{
    book[inPut[i]]++;
    // console.log(book);
}
for(let j=200;j>=0;j--)
{
    for(let k=1;k<=book[j];k++)
    {
        document.write(j+" ");
    }
}
// 桶排序时间复杂度为：O(n+m) 

// //然后是冒泡排序
for(let i=0;i<inPut.length-1;i++)
{
    for(j=0;j<inPut.length-i;j++)
    {
        let temp;
        if(inPut[j]<inPut[j+1]) //内循环两两相比较
        {
            temp = inPut[j];
            inPut[j] = inPut[j+1];
            inPut[j+1] = temp;
        }
    }
}
for(let i=0;i<inPut.length;i++)
{
    document.write(inPut[i]+' ');
}
//时间复杂度为O(n*n)

//最后是快速排序
//定义一个快速排序的函数
function quickSort(left,right){//安排两个哨兵分别从最右和最左开始排序
    if(left>right){
        return;//当左哨兵走到右哨兵前面，表示这一回合已经排完序了
    }
    temp = inPut[left];
    let i = left;
    let j = right;
    while(i!=j){
        while(inPut[j]<=temp&&j>i){
            j--;//右哨兵向左前进
        }
        while(inPut[i]>=temp&&j>i){//当没有等于时，排序不正确，为什么？因为也有可能数列中有和基准数相等的数，但是还没有踩到分界点
            i++;//左哨兵向右前进
        }
        if(i<j){//当两个哨兵没有遇到时且跳出了前面的两个循环时，交换两个哨兵所在的数据的位置
          temp=inPut[i];
          inPut[i]= inPut[j];
          inPut[j] = temp;
        }
    }
    inPut[left] = inPut[j];
    inPut[j] = temp;//最后踩到分界点

    quickSort(left,i-1);//左边数据进行排序
    quickSort(j+1,right);//右边数据进行排序
}
quickSort(0,inPut.length-1);
for(let i=0;i<inPut.length;i++)
{
    document.write(inPut[i]+' ');
}