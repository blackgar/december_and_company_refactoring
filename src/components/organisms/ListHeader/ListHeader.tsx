import { accountListAtom } from '@atom';
import { useRecoilState } from 'recoil';
import useMutation from '@hooks/useMutation';
import { useEffect, useState } from 'react';
import SearchBar from '@molecules/SearchBar/SearchBar';
import Filter from '@organisms/Filter/Filter';
const ListHeader = () => {
  const [accounts, setAccounts] = useRecoilState(accountListAtom);
  const [query, setQuery] = useState('');
  const [searchAccounts, { data }] = useMutation(`/accounts?_expand=user&q=${query}`);
  const submitToSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchAccounts();
  };
  useEffect(() => {
    if (data) setAccounts(data);
  }, [data]);
  console.log(data);

  return (
    <div className="flex justify-between">
      <SearchBar onSubmit={submitToSearch} setFunc={setQuery} />
      <Filter />
    </div>
  );
};

export default ListHeader;
