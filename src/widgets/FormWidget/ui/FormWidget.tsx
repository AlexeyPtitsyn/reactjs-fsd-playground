import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from "react-hook-form";
import styles from './FormWidget.module.css';

const REQUIRED_WARNING = 'Поле должно быть заполнено.'

const schema = yup.object().shape({
      username: yup.string().required(REQUIRED_WARNING),
      email: yup.string().email('Должен быть правильный email-адрес').required(REQUIRED_WARNING),
      password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required(REQUIRED_WARNING),
      passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Пароли должны совпадать').required(REQUIRED_WARNING),
      links: yup.array(yup.object().shape({
        link: yup.string().required(REQUIRED_WARNING),
      }).required(REQUIRED_WARNING)).required(),
    });

type TForm = yup.InferType<typeof schema>;

const FormWidget = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<TForm>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      links: [{ link: '' }],
    }
  });

  const { fields : linksFields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit((data) => {
          console.log({data});
      }, (errors) => {
        console.log({errors});
      })}>
      <label>
        <div className={styles.label}>
          Имя пользователя
        </div>
        <input type="text" {...register('username')} className={styles.inputField} />
        {errors.username && (
          <div className={styles.error}>{errors.username.message}</div>
        )}
      </label>
      <label>
        <div className={styles.label}>
          E-mail
        </div>
        <input type="text" {...register('email')} className={styles.inputField} />
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
      </label>
      <label>
        <div className={styles.label}>
          Пароль
        </div>
        <input type="password" {...register('password')} className={styles.inputField} />
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
      </label>
      <label>
        <div className={styles.label}>
          Подтверждение пароля
        </div>
        <input type="password" {...register('passwordConfirm')} className={styles.inputField} />
        {errors.passwordConfirm && (
          <div className={styles.error}>{errors.passwordConfirm.message}</div>
        )}
      </label>

        {linksFields.map((link, index) => (
          <label key={link.id}>
            <div className={styles.label}>
              Ссылка на соц.сети {index + 1}
            </div>
            <div className={styles.arrayField}>
              <div style={{ paddingTop: '.5em'}}>
                <input type="text" {...register(`links.${index}.link`)} className={styles.inputField} />
                {errors.links && errors.links[index] && errors.links[index].link && (
                  <div className={styles.error}>{errors.links[index].link.message}</div>
                )}
              </div>
              <div>
                <button type="button" onClick={() => remove(index)} className={styles.button}>
                    Удалить 
                </button>
              </div>
            </div>
          </label>
        ))}

        <div>
          <button type="button" className={styles.button} onClick={() => {
            append({ link: '' });
          }}>Добавить поле для ссылки</button>
        </div>

        <div>
          <input type="submit" className={styles.button} />
        </div>
      </form>
    </div>
  );
}

export default FormWidget;
