1. component를 구분하는 방법에 대한 이해가 부족한 것 같다.
   
- 다소 복잡하게 구분되어 있는데 정리가 필요할 것 같다.

2. 왜? 이벤트 리스너 안에서 매개변수를 주려면 arrow function으로 감싸줘야하는지
   → 그냥 함수만 넣으면 바로 실행인데 추가로 익명의 함수를 씌워서 누른 다음 실행되도록?
 
3. removeBtn={() => removeBtn(item.id)}
   onToggle={() => onToggle(item.id)} 부모요소에서 이렇게 넘겨줘야 하는 이유??
원하는 매개변수만 넣을수도 전체적인매개변수를 넣을 수 도 있어서 인것같습니다.
4. onToggle 쪽 코드 리뷰..
맨처음 완료버튼을 클릭하면 해당 id를 가지고 onToggle로 가서 item.id 와 id를 비교해서 같은 것만 찾고 일치하면 ? 여기서 ...으로 풀고, false를 true로 바꿔서 배열에 할당됩니다. :
이후 setToDoList(newToDoList)에 매개변수로 바꿔주게되면 // 이후 취소로 바뀌면서  item.isDone로  working과 done로 구분되서 화면에 랜더링됩니다.
6. 컴포넌트를 분리하는 방법 숙달
