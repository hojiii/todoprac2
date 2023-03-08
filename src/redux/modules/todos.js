const initialState = [
  {
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: true
	}
]

const ADDTODO = "app/todos/ADDTODO"
const DELTODO = "app/todos/DELTODO"
const FINTODO = "app/todos/FINTODO"


export const addTodo = (payload) =>{
  return{
    type: ADDTODO,
    payload : payload,
  }
}
export const delTodo = (payload) => {
  return{
    type: DELTODO,
    payload: payload,
}
}

export const finTodo = (payload) => {
  return{
    type:FINTODO,
    payload: payload
  }
}



// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO : 
    const newTodo = {
      id: Math.random(),
      title: action.payload.title,
      body: action.payload.body,
      isDone: false
    }
    return [...state, newTodo]
    
    case DELTODO : 
    const delstate = state.filter((item) => item.id !== action.payload.id)
    return state = delstate

    case FINTODO :
      const finstate = state.map((item)=> item.id === action.payload.id ?{
        ...item,isDone:!action.payload.isDone}:item)
      return state =finstate


    
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;