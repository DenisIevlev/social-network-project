import React from 'react';
import {Field} from 'redux-form';
import {required, maxLengthCreator, minLengthCreator} from '../../../../utilities/validators/validators';
import {Textarea} from '../../../common/FormControls/FormControls';

const minLength3 = minLengthCreator(3);
const maxLength60 = maxLengthCreator(60);

const addPostForm = (props) => {
  return (
      <div>
        <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name="newPostText" placeholder='Write your post' validate={[required, maxLength60, minLength3]}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
        </form>
      </div>
  );
}
export default addPostForm;