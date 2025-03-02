// export default function Todo(task){
//     return (
//         <li>Task:{task}</li>
//     )
// }

//conditional randariong option 1:

// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>Finished:{task}</li>
//     }

//     else{
//         return <li>Work one:{task}</li>
//     }
  
// }
//conditional randariong option 2:
// export default function Todo({task,isDone}){
//    if(isDone){
//     return <li>Finished:{task}</li>
//    }
//    return <li>Work on: {task}</li>
// }



// conditional randariong option 3:tarnary oparator
// export default function Todo({task,isDone}){
//    return (
//     <li>{isDone ? 'Finished':'work on'}:{task}</li>
//    )
//  }


// conditional randariong option 4 ||


// export default function Todo({task,isDone}){
//     return (
//      <li>{task} {isDone || ':Done'}</li>
//     )
//   }
 


// conditional randariong option 5


export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finish:{task}</li>
    }

    else{
        listItem = <li>Work on:{task}</li>
    }
    return listItem;

}
