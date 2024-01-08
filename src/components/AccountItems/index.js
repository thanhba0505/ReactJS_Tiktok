import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import Image from '~/components/Image'
import styles from './AccountItem.module.scss';

const cx = className.bind(styles);

function AccountsItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        alt="avatar"
        src="https://lh3.googleusercontent.com/fife/AGXqzDlUvEKcxezpda-77bYoTVmM4yLB-72mhLZioCSsyvAsh2QXrIzhx06PP_M-E0t7wB6Tb7osR9SkOWXKQ_pBy1oPHJHF0gaqpjCD4KVTfioP4Cm32m-yBtqfLCsk5_z78-dMSO_wktJ9gQ-NXp6dwXHQe2hQUTvoHyps-Dusi1uWfpCca6vTPePOIZli8SCr1H-ldSWXqmXvnmQnlF58YpB3eP_2bvGTY9shlyIWL3toe8zOPFmeJppvQHd889aV4XwFpxyjXkEh8SSZ3ZPToHDu-rUFEJwnLpkv0-a8V0LwIQkfH3ewMRAd35LJGcQauwYs7MhNPm1nlnJP55nDTVGgnkffR8Gqgo-tFZ7cs-q_wKtyuvz1UYcPlC17_xnCIbkvzkr3peQWSYutG_k4NwJI4-mI8amo-cL3YbJ1VDjSbGUQpWG_S4G9vwjb6hGRQA3YPJSovZSWDHpe55JahdVDRw-eFhPc08TBpitW5bbEwfOSNtZM3kYb8RMWZ2est04zS91G4lkLnO0pxHPr8BOHV_2hSRrvq3XOc7fEapSTa-rAEb2rC2i4DvnxSl5hoIK1OJ2KT_iqbSpanKjolpmQOyN4xKnOOei_4KhJ_xaS7aq3zkGnKKItBvc--fWfRl8sPffwoHsm6iTrhFO0buRd28dcFLpqXO1S_tSYkVKkW8KOk4i_UGB_Mf090f0-MElU0Zv5bMpoZy5cZU-nvh8V8T1fEfvwnXPH5_hQdqVaS7D4PbIVigKTdYnvN5w5nGB0igDFq_WXX4R30yZ9dTgjB_cIo6iQSlk8QEne3oogBWY5jKLMKeRjAFZoz3Z22dcMKJUAInh9JA-clGKq3rCMqqQxjSMMUsU9SmFk9svsdFE9PQ7b8LdV2SV6Ecry94ZFFpC2MrjGQWMdGlxbQKuLbDZlr1SHi6Q8av8AgMqVogo0YMS1s4hqNOmazZbYdsZa9k_Z10udwKmMlkM86bHpmfbii8H5bZoSuj32Nj3AJqTgFEj-dHQBrsXDLcDoeY28EbsS8dnznnbz7xuH1MDDfJZBEvhzZiDjaLYgRIvXpS6M3PVgIguquJgSQReeRLKvyOHdqFKcRi3S5qEqg1o8ApBV4rSXl8UawrUKhxsOttPiauPHoCGKDqhlROmq_ujFE1tMecFrIFWyMM61I0p14kDVGHVsdv7oGgyCpxsssScIZAy7XgCReSU_f9jya_hbV_FS_an_18L3JwICUbad56Ajfgn4Zw4y-dB1MivwQGwnkD_rz0lP2s8cqFDbzuBOYNjg5PtkHnbNjXROliykRUFNMjWCh7des9F60sZqRQoxPN-UIcy0U3f49n4pjRQH5wIDTddg5OTz8qp3XrmA_8H9g95ParY7lAVQFxeCs1RzGENH7li2_au6Lbd8hi8rSYmI6qEL7m_z53ft-tAxwb1sZk63vE8bzaj785SRS2ySiMoeD9SGuLlsnlDNoVIjvw3sty1RsMzl0Zc-d8xcu-c_KtWa4Ay38Tmak35uOlw0SMjleB8v9Q=w1920-h880"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Le Thanh Ba</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>lethanhba</span>
      </div>
    </div>
  );
}

export default AccountsItem;
