export function Password_input(props) {
    const { todoText, onChange, onClickAdd, disabled } = props;
    return (
      <>
        <div className="input-area">
          <input
            disabled={disabled}
            placeholder="あいことばを入力"
            onChange={onChange}
            value={todoText}
          />
          <button onClick={onClickAdd}>追加</button>
        </div>
      </>
    );
  }

  export default Password_input;