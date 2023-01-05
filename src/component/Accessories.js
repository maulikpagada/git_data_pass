import React from 'react';
import AccessoriesFees from './AccessoriesFees';

function Accessories(props) {
    return (
        <div>
            {
                props.AccName === 'mobile' ?
                    <>
                        <span>Cover</span>
                        <AccessoriesFees Accpri={'Cover'} />
                        <span>Camara</span>
                        <AccessoriesFees Accpri={'Camara'} />
                    </>
                    :
                    <>
                        <span>LightKeyBord</span>
                        <AccessoriesFees Accpri={'LightKeyBord'} />
                        <span>nonLightKeyBord</span>
                        <AccessoriesFees Accpri={'nonLightKeyBord'} />
                    </>
            }


        </div >
    );
}

export default Accessories;