import React , { useState } from 'react';

const Counter = ( {users} ) => { 

    
    // let [state, setState] = useState( 0 );

    // return (
    //     <div>
    //         <p id="value">{state}</p>
    //         <button id="increment" onClick={() => setState(state + 1)}>+</button>
    //         <button id="decrement" onClick={() => setState(state - 1)}>-</button>
    //     </div>
    // );

    // return (
    //     <>
    //         { primary === true ?
    //             <h1>
    //                 { user ? `Welcome ${ user }!` : `Welcome!` }
    //             </h1> 
    //             : 
    //             <h2>
    //                 { user ? `Welcome ${ user }!` : `Welcome!` }
    //             </h2>
    //         }
    //     </>
    // );
    console.log( 'este es users', users )

    const userOrdenated = users.sort( ( a,b ) => {
        if ( a.firstName > b.firstName ) {
            return -1;
        }
        if ( a.firstName < b.firstName )  {
            return 1;
        }
        return 0;
    });
 
    const user = userOrdenated.map( (item, i) => 
        <li key={i} >
            { `${item.firstName}  ${item.lastName}`}
        </li>
    );

    return (
        <>
        <div>
            <div className='user-count'>
                Users: {users.length}
            </div>
            { users.length === 0 ?
                ''
                : 
                <ul className='user-list'>
                    { user }
                </ul>
            }
        </div>
        </>
    )
    

}

export default Counter;