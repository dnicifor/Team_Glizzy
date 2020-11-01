var app = new Vue({
  el: '#certs',
  data: {
      certInfo: [],

      newCert: {
        CertificationID: '',
      	CertificationName: '',
      	CertifyingAgency: '',
      	ExpirationPeriod: ''
    }
  },

  created() {
    this.fetchCert();
  },

  methods: {
    fetchCert() {
      fetch('api/view/certifications.php')
        .then(response => response.json())
        .then(json => {
          this.certInfo=json;
          console.log(this.certInfo);
        });
      },
    },
});
