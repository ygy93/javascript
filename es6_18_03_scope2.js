const text = 'global';
{
  const text = 'local';
  {
    console.log(text);
  }
}