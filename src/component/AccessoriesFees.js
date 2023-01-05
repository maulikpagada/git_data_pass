import React from 'react';

function AccessoriesFees(props) {
    return (
        <div>
            {
                props.Accpri === 'Cover' ? '1000' :
                    props.Accpri === 'Camara' ? '25000' :
                        props.Accpri === 'LightKeyBord' ? '2000' :
                            '1500'
            }

        </div>
    );
}

export default AccessoriesFees;