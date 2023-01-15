export type isValidFormProps = {
  name: string;
  value: any;
  validator?: any; // yup object
  fieldsObjectList: object;
};

const isValidForm = async (data: isValidFormProps): Promise<any> => {
  let response;

  if (data?.validator) {
    response = await data?.validator.isValid(data?.value, {
      abortEarly: false,
    });
  } else {
    response = data?.value;
  }

  return {
    ...data?.fieldsObjectList,
    [data?.name]: response,
  };
};

export default isValidForm;
