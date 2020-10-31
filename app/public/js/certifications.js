var app = new Vue({
  el: '#certs',
  data: {
    certifications: [{
      CertificationID: '',
    	CertificationName: '',
    	CertifyingAgency: '',
    	ExpirationPeriod: '',
    }],
  },

  created() {
    this.fetchMember();
  },

  methods: {
    fetchCert() {
      fetch('api/view/certifications.php')
        .then(response => response.json())
        .then(json => {
          this.certifications=json;
          console.log(this.certifications);
        });
      },
    },
})
