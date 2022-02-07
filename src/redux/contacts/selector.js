export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getfilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  if (filter !== '') {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return contacts;
  }
};
