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
    fetchMember() {
      fetch('api/Reports/certReport.php')
        .then(response => response.json())
        .then(json => {
          this.certifications=json;
          console.log(this.certifications);
        });
      },
    },
})
