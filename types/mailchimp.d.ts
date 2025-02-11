declare module '@mailchimp/mailchimp_marketing' {
  interface MailchimpClient {
    setConfig(config: {
      apiKey: string;
      server: string;
    }): void;
    lists: {
      addListMember(listId: string, data: {
        email_address: string;
        status: string;
        merge_fields?: {
          [key: string]: any;
        };
      }): Promise<any>;
    };
  }

  const mailchimp: MailchimpClient;
  export default mailchimp;
} 